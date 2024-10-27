export type ForgotPasswordStage = 'email' | 'otp' | 'password';

export type HandleStageChangeParams = {
  newStage: ForgotPasswordStage;
  email?: string;
};

export type SessionPayload = {
  userId: string | number;
  expiresAt: Date;
};

export type SessionOptions = {
  userId: string | number;
  rememberMe?: boolean;
};
