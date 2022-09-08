/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive } from '@angular/core';
import { NG_VALIDATORS, } from '@angular/forms';
import { PhoneNumberUtil } from 'google-libphonenumber';
/* const validateInput: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const error = { inValid: true };
  const isRequired = control.errors && control.errors.required;
  let phoneNumber: PhoneNumber;

  try {
    phoneNumber = PhoneNumberUtil.getInstance().parse(
      control.value.number,
      control.value.isoCode
    );
  } catch (e) {
    if (!isRequired) {
      return error;
    }
  }

  if (control.value) {
    if (!phoneNumber) {
      return error;
    } else {
      if (
        !PhoneNumberUtil.getInstance().isValidNumberForRegion(
          phoneNumber,
          control.value.isoCode
        )
      ) {
        return error;
      }
    }
  }
  return;
}; */
var /* const validateInput: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const error = { inValid: true };
  const isRequired = control.errors && control.errors.required;
  let phoneNumber: PhoneNumber;

  try {
    phoneNumber = PhoneNumberUtil.getInstance().parse(
      control.value.number,
      control.value.isoCode
    );
  } catch (e) {
    if (!isRequired) {
      return error;
    }
  }

  if (control.value) {
    if (!phoneNumber) {
      return error;
    } else {
      if (
        !PhoneNumberUtil.getInstance().isValidNumberForRegion(
          phoneNumber,
          control.value.isoCode
        )
      ) {
        return error;
      }
    }
  }
  return;
}; */
IonIntlTelInputValidators = /** @class */ (function () {
    function IonIntlTelInputValidators() {
    }
    /**
     * @param {?} control
     * @return {?}
     */
    IonIntlTelInputValidators.phone = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        /** @type {?} */
        var error = { phone: true };
        /** @type {?} */
        var phoneNumber;
        if (!control.value) {
            return error;
        }
        try {
            phoneNumber = PhoneNumberUtil.getInstance().parse(control.value.nationalNumber, control.value.isoCode);
        }
        catch (e) {
            return error;
        }
        if (!phoneNumber) {
            return error;
        }
        else {
            if (!PhoneNumberUtil.getInstance().isValidNumberForRegion(phoneNumber, control.value.isoCode)) {
                return error;
            }
        }
    };
    return IonIntlTelInputValidators;
}());
/* const validateInput: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const error = { inValid: true };
  const isRequired = control.errors && control.errors.required;
  let phoneNumber: PhoneNumber;

  try {
    phoneNumber = PhoneNumberUtil.getInstance().parse(
      control.value.number,
      control.value.isoCode
    );
  } catch (e) {
    if (!isRequired) {
      return error;
    }
  }

  if (control.value) {
    if (!phoneNumber) {
      return error;
    } else {
      if (
        !PhoneNumberUtil.getInstance().isValidNumberForRegion(
          phoneNumber,
          control.value.isoCode
        )
      ) {
        return error;
      }
    }
  }
  return;
}; */
export { IonIntlTelInputValidators };
var IonIntlTelInputValidatorDirective = /** @class */ (function () {
    function IonIntlTelInputValidatorDirective() {
    }
    /**
     * @param {?} control
     * @return {?}
     */
    IonIntlTelInputValidatorDirective.prototype.validate = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return IonIntlTelInputValidators.phone(control);
    };
    IonIntlTelInputValidatorDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[ionIntlTelInputValid]',
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: IonIntlTelInputValidatorDirective,
                            multi: true,
                        },
                    ],
                },] }
    ];
    return IonIntlTelInputValidatorDirective;
}());
export { IonIntlTelInputValidatorDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWludGwtdGVsLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbi1pbnRsLXRlbC1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi9pb24taW50bC10ZWwtaW5wdXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFFTCxhQUFhLEdBS2QsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUNyRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQTtJQStCQSxDQUFDOzs7OztJQTlCUSwrQkFBSzs7OztJQUFaLFVBQWEsT0FBd0I7O1lBQzdCLEtBQUssR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7O1lBQ3pCLFdBQXdCO1FBRTVCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2xCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxJQUFJO1lBQ0YsV0FBVyxHQUFHLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQy9DLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUM1QixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FDdEIsQ0FBQztTQUNIO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixPQUFPLEtBQUssQ0FBQztTQUNkO2FBQU07WUFDTCxJQUNFLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLHNCQUFzQixDQUNuRCxXQUFXLEVBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQ3RCLEVBQ0Q7Z0JBQ0EsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO0lBQ0gsQ0FBQztJQUNILGdDQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQ7SUFBQTtJQWVBLENBQUM7Ozs7O0lBSEMsb0RBQVE7Ozs7SUFBUixVQUFTLE9BQXdCO1FBQy9CLE9BQU8seUJBQXlCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7O2dCQWRGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLEVBQUUsaUNBQWlDOzRCQUM5QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjs7SUFLRCx3Q0FBQztDQUFBLEFBZkQsSUFlQztTQUpZLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgVmFsaWRhdG9yRm4sXG4gIE5HX1ZBTElEQVRPUlMsXG4gIFZhbGlkYXRvcixcbiAgQWJzdHJhY3RDb250cm9sLFxuICBGb3JtR3JvdXAsXG4gIFZhbGlkYXRpb25FcnJvcnMsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFBob25lTnVtYmVyLCBQaG9uZU51bWJlclV0aWwgfSBmcm9tICdnb29nbGUtbGlicGhvbmVudW1iZXInO1xuXG4vKiBjb25zdCB2YWxpZGF0ZUlucHV0OiBWYWxpZGF0b3JGbiA9IChcbiAgY29udHJvbDogRm9ybUdyb3VwXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gIGNvbnN0IGVycm9yID0geyBpblZhbGlkOiB0cnVlIH07XG4gIGNvbnN0IGlzUmVxdWlyZWQgPSBjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9ycy5yZXF1aXJlZDtcbiAgbGV0IHBob25lTnVtYmVyOiBQaG9uZU51bWJlcjtcblxuICB0cnkge1xuICAgIHBob25lTnVtYmVyID0gUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKCkucGFyc2UoXG4gICAgICBjb250cm9sLnZhbHVlLm51bWJlcixcbiAgICAgIGNvbnRyb2wudmFsdWUuaXNvQ29kZVxuICAgICk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoIWlzUmVxdWlyZWQpIHtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG4gIH1cblxuICBpZiAoY29udHJvbC52YWx1ZSkge1xuICAgIGlmICghcGhvbmVOdW1iZXIpIHtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKFxuICAgICAgICAhUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKCkuaXNWYWxpZE51bWJlckZvclJlZ2lvbihcbiAgICAgICAgICBwaG9uZU51bWJlcixcbiAgICAgICAgICBjb250cm9sLnZhbHVlLmlzb0NvZGVcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuO1xufTsgKi9cblxuZXhwb3J0IGNsYXNzIElvbkludGxUZWxJbnB1dFZhbGlkYXRvcnMge1xuICBzdGF0aWMgcGhvbmUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIGNvbnN0IGVycm9yID0geyBwaG9uZTogdHJ1ZSB9O1xuICAgIGxldCBwaG9uZU51bWJlcjogUGhvbmVOdW1iZXI7XG5cbiAgICBpZiAoIWNvbnRyb2wudmFsdWUpIHtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcGhvbmVOdW1iZXIgPSBQaG9uZU51bWJlclV0aWwuZ2V0SW5zdGFuY2UoKS5wYXJzZShcbiAgICAgICAgY29udHJvbC52YWx1ZS5uYXRpb25hbE51bWJlcixcbiAgICAgICAgY29udHJvbC52YWx1ZS5pc29Db2RlXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG5cbiAgICBpZiAoIXBob25lTnVtYmVyKSB7XG4gICAgICByZXR1cm4gZXJyb3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChcbiAgICAgICAgIVBob25lTnVtYmVyVXRpbC5nZXRJbnN0YW5jZSgpLmlzVmFsaWROdW1iZXJGb3JSZWdpb24oXG4gICAgICAgICAgcGhvbmVOdW1iZXIsXG4gICAgICAgICAgY29udHJvbC52YWx1ZS5pc29Db2RlXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tpb25JbnRsVGVsSW5wdXRWYWxpZF0nLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgdXNlRXhpc3Rpbmc6IElvbkludGxUZWxJbnB1dFZhbGlkYXRvckRpcmVjdGl2ZSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIElvbkludGxUZWxJbnB1dFZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gSW9uSW50bFRlbElucHV0VmFsaWRhdG9ycy5waG9uZShjb250cm9sKTtcbiAgfVxufVxuIl19