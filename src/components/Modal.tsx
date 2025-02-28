import { useStore } from '@nanostores/react';
import { modalData } from '../lib/modalStore';
import { useEffect, useState } from 'react';
import '../styles/modal.css';

export default function Modal() {
  const $modalData = useStore(modalData);
  const [currIndex, setCurrIndex] = useState<number | null>(null);

  useEffect(() => {
    setCurrIndex($modalData?.index ?? null);
  }, [$modalData?.index]);

  if (!$modalData || currIndex == null) return <></>;

  const { type, data } = $modalData;
  const dataLength = type == 'code' ? data.items.length : data.length;

  const handleNavigate = (direction: 'left' | 'right') => {
    if (direction == 'left' && currIndex > 0) setCurrIndex(currIndex - 1);
    if (direction == 'right' && dataLength - 1) setCurrIndex(currIndex + 1);
  };

  const handleClose = () => {
    setCurrIndex(null);
    modalData.set(null);
  };

  return (
    <div className="modal">
      <div className="modal-background" aria-hidden={true} />
      <button className="icon close-icon" onClick={handleClose} tabIndex={0}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
          />
        </svg>
      </button>
      {currIndex > 0 && (
        <button
          className="icon arrow-icon left"
          onClick={() => handleNavigate('left')}
          tabIndex={0}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6z" />
          </svg>
        </button>
      )}
      {currIndex < dataLength - 1 && (
        <button
          className="icon arrow-icon right"
          onClick={() => handleNavigate('right')}
          tabIndex={0}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z" />
          </svg>
        </button>
      )}
      {type == 'image' && (
        <div className="image-container">
          <img src={data[currIndex].image.src} alt={data[currIndex].description || ''} />
        </div>
      )}
      {type == 'code' && (
        <div className="card-container">
          <div className="title">{data.items[currIndex].fields.title}</div>
          {data.items[currIndex].fields.previewVideo ? (
            <div className="preview-container">
              <video autoPlay loop muted playsInline key={currIndex}>
                <source
                  src={data.items[currIndex].fields.previewVideo.fields.file?.url}
                  type="video/mp4"
                />
              </video>
            </div>
          ) : (
            <div className="preview-container">
              <img
                src={data.items[currIndex].fields.coverImage?.fields.file?.url}
                alt={data.items[currIndex].fields.coverImage?.fields.description || ''}
              />
            </div>
          )}
          <div className="text-container">
            {!data.items[currIndex].fields.link?.Livelink && (
              <div className="construction-text">Project currently under construction.</div>
            )}
            <div className="technologies">
              {data.items[currIndex].fields.technologies?.map((technology, idx) => {
                return <span key={idx}>{technology}</span>;
              })}
            </div>
            <div className="description">{data.items[currIndex].fields.description}</div>
            <div className="links">
              {data.items[currIndex].fields.link?.Livelink && (
                <a
                  className="live-link"
                  href={data.items[currIndex].fields.link?.Livelink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Website
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z"
                    />
                  </svg>
                </a>
              )}
              <a
                className="github-link"
                href={data.items[currIndex].fields.link?.GitHub}
                target="_blank"
                rel="noreferrer"
              >
                Github
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
