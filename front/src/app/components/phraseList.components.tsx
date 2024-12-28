import React from "react";
import { IPhrase } from "../interfaces/IPhrase";
import { MdCancel, MdDelete } from "react-icons/md";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const PhraseList = ({
  phrases,
  onDelete,
}: {
  phrases: IPhrase[];
  onDelete: (id: string) => void;
}) => {
  return (
    <div className="col-10">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" className="col-8">
              Phrases
            </th>
            <th scope="col">Palindrome</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {phrases?.map((phrase, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{phrase.phrase}</td>
                <td>
                  {phrase.isPalindrome ? (
                    <IoCheckmarkCircleSharp
                      className="text-success"
                      size="2rem"
                    />
                  ) : (
                    <MdCancel className="text-danger" size="2rem" />
                  )}
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => onDelete(phrase._id)}
                  >
                    <MdDelete size="1rem" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PhraseList;
