type ErrorDetail = {
  data?: Record<string, unknown>;
} & {
  [key: string]: string | Record<string, unknown> | undefined;
};

export class AppError extends Error {
  private _code: string;
  private _details: ErrorDetail;

  constructor(code: string, message: string, details: ErrorDetail) {
    super(message);
    this._code = code;
    this._details = details;
  }

  public get code(): string {
    return this._code;
  }

  public get details(): ErrorDetail {
    return this._details;
  }
}
