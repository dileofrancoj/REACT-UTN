export const MODIFY_USER = "MODIFY_USER";

export const modifyUser = (payload) => {
  return {
    type: MODIFY_USER,
    payload,
  };
};
