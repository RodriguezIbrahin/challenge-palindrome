import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdError } from "react-icons/md";

const PhraseToast = ({ data }: { data: any }) => {
  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div
        className="toast show"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header  bg-secondary">
          {data?.phrase ? (
            <>
              <IoMdCheckmarkCircleOutline className="text-success" />
              <strong className="me-auto px-2">Created Phrase</strong>
            </>
          ) : (
            <>
              <MdError className="text-danger" />
              <strong className="me-auto px-2">Error</strong>
            </>
          )}
          <small className="text-body-secondary">now</small>
        </div>
        <div className="toast-body bg-transparent">
          {data?.phrase || data?.message}
        </div>
      </div>
    </div>
  );
};

export default PhraseToast;
