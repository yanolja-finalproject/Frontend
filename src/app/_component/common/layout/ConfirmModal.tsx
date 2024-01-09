import useOnClickOutside from "@/hooks/useOnClickOutside";
import React, { useRef } from "react";

interface Props {
  isOpen: boolean;
  onClose: VoidFunction;
  type: string;
  message?: string;
  theme?: string;
  onConfirm?: VoidFunction;
  styleClass?: string;
}
const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  theme,
  type,
  message,
  styleClass,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => {
    onClose();
  });
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black-6 cursor-pointer">
      {type === "confirm" && (
        <div
          className="w-[87.2%] web:w-[327px]  h-[176px] mx-auto absolute top-[30%] left-[50%] translate-x-[-50%] rounded-md bg-white flex flex-col justify-evenly"
          ref={ref}
        >
          {theme === "withdraw" && (
            <>
              <p className="text-lg font-bold text-center leading-6">
                정말로 탈퇴 하시겠어요?
              </p>
              <div className="flex flex-row justify-between items-between px-[72px]">
                <button
                  className="text-black-4 font-medium"
                  type="button"
                  onClick={onConfirm}
                >
                  예
                </button>
                <button
                  className="text-blue font-bold"
                  type="button"
                  onClick={onClose}
                >
                  아니오
                </button>
              </div>
            </>
          )}
          {theme === "login" && (
            <>
              <p className="text-lg font-bold text-center leading-6">
                로그인이 필요한 서비스입니다. <br />
                로그인 하시겠습니까
              </p>
              <div className="flex flex-row justify-between items-between px-[72px]">
                <button
                  className="text-black-4 font-medium"
                  type="button"
                  onClick={onClose}
                >
                  취소
                </button>
                <button
                  className="text-blue font-bold"
                  type="button"
                  onClick={onConfirm}
                >
                  확인
                </button>
              </div>
            </>
          )}
        </div>
      )}
      {type === "alert" && (
        <div
          className="w-[87.2%] web:w-[327px]  h-[140px] mx-auto absolute top-[30%] left-[50%] translate-x-[-50%] rounded-md bg-white flex flex-col justify-evenly"
          ref={ref}
        >
          <p className="text-4.5 font-bold text-center">{message}</p>

          <div className="flex flex-row justify-end items-between px-8">
            <button
              className={`text-blue font-bold ${styleClass}`}
              type="button"
              onClick={onClose}
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmModal;