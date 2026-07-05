export enum HttpCode {
  OK = 200,
  CREATED = 201,
  NOT_MODIFIED = 304,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export enum Message {
  SOMETHING_WENT_WRONG = "Something went wrong!",
  NO_DATA_FOUND = "No data is found!",
  CREATE_FAILED = "Create is failed!",
  UPDATE_FAILED = "Update is failed!",

  NO_MEMBER_NICK = "no member with that member nick!",
  BLOCKED_USER = "You have been blocked, please contact admin!",
  WRONG_PASSWORD = "wrong password entered, please try again",
  USED_NICK_PHONE = "you are inserting already used nick or phone!",
  NOT_AUTHENTICATED = "You are not authenticated, login first!",
  TOKEN_CREATION_FAILED = "Token creation error!",
}

class Errors extends Error {
  public code: HttpCode;
  public message: Message;

  static standards = {
    code: HttpCode.INTERNAL_SERVER_ERROR,
    massage: Message.SOMETHING_WENT_WRONG,
  };

  constructor(statusCode: HttpCode, statusMessage: Message) {
    super();
    this.code = statusCode;
    this.message = statusMessage;
  }
}

export default Errors;
