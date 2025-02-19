import { ReactNode } from 'react';
import { ModalData, modalData } from '../lib/modalStore';

interface Props {
  passedModalData: ModalData;
  children: ReactNode;
}

export default function ModalTrigger({ children, passedModalData }: Props) {
  return (
    <button className="modal-trigger" onClick={() => modalData.set(passedModalData)}>
      {children}
    </button>
  );
}
