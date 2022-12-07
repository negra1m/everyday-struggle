const ErrorMessages = {
  required: '{fieldLabel} is mandatory.',
  mismatchedPasswords: '{fieldLabel} field must match New Password Field.',
  minlength: '{fieldLabel} minlength must be {requiredLength} digits (current: {actualLength}).',
  maxlength: '{fieldLabel} maxlength must be {requiredLength} digits (current: {actualLength}).',
  email: 'Invalid e-mail format.',
};

export class ErrorMessage {
  static Format(error: string, fieldLabel: string, validationInfo: any): string {
    try {
      let message = ErrorMessages[error].replace('{fieldLabel}', fieldLabel);

      if (typeof validationInfo === 'object' && Object.keys(validationInfo).length > 0) {
        Object.keys(validationInfo).map(key => message = message.replace(`{${key}}`, validationInfo[key]));
      }

      return message;
    } catch (e) {
      return 'Error message not defined';
    }
  }
}
