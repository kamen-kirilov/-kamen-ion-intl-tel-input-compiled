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
export class IonIntlTelInputValidators {
    /**
     * @param {?} control
     * @return {?}
     */
    static phone(control) {
        /** @type {?} */
        const error = { phone: true };
        /** @type {?} */
        let phoneNumber;
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
    }
}
export class IonIntlTelInputValidatorDirective {
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        return IonIntlTelInputValidators.phone(control);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWludGwtdGVsLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbi1pbnRsLXRlbC1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi9pb24taW50bC10ZWwtaW5wdXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFFTCxhQUFhLEdBS2QsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUNyRSxNQUFNLE9BQU8seUJBQXlCOzs7OztJQUNwQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQXdCOztjQUM3QixLQUFLLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFOztZQUN6QixXQUF3QjtRQUU1QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNsQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsSUFBSTtZQUNGLFdBQVcsR0FBRyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUMvQyxPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFDNUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQ3RCLENBQUM7U0FDSDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsT0FBTyxLQUFLLENBQUM7U0FDZDthQUFNO1lBQ0wsSUFDRSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxzQkFBc0IsQ0FDbkQsV0FBVyxFQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUN0QixFQUNEO2dCQUNBLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtJQUNILENBQUM7Q0FDRjtBQWFELE1BQU0sT0FBTyxpQ0FBaUM7Ozs7O0lBQzVDLFFBQVEsQ0FBQyxPQUF3QjtRQUMvQixPQUFPLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7WUFkRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsV0FBVyxFQUFFLGlDQUFpQzt3QkFDOUMsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgVmFsaWRhdG9yRm4sXG4gIE5HX1ZBTElEQVRPUlMsXG4gIFZhbGlkYXRvcixcbiAgQWJzdHJhY3RDb250cm9sLFxuICBGb3JtR3JvdXAsXG4gIFZhbGlkYXRpb25FcnJvcnMsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFBob25lTnVtYmVyLCBQaG9uZU51bWJlclV0aWwgfSBmcm9tICdnb29nbGUtbGlicGhvbmVudW1iZXInO1xuXG4vKiBjb25zdCB2YWxpZGF0ZUlucHV0OiBWYWxpZGF0b3JGbiA9IChcbiAgY29udHJvbDogRm9ybUdyb3VwXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gIGNvbnN0IGVycm9yID0geyBpblZhbGlkOiB0cnVlIH07XG4gIGNvbnN0IGlzUmVxdWlyZWQgPSBjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9ycy5yZXF1aXJlZDtcbiAgbGV0IHBob25lTnVtYmVyOiBQaG9uZU51bWJlcjtcblxuICB0cnkge1xuICAgIHBob25lTnVtYmVyID0gUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKCkucGFyc2UoXG4gICAgICBjb250cm9sLnZhbHVlLm51bWJlcixcbiAgICAgIGNvbnRyb2wudmFsdWUuaXNvQ29kZVxuICAgICk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoIWlzUmVxdWlyZWQpIHtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG4gIH1cblxuICBpZiAoY29udHJvbC52YWx1ZSkge1xuICAgIGlmICghcGhvbmVOdW1iZXIpIHtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKFxuICAgICAgICAhUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKCkuaXNWYWxpZE51bWJlckZvclJlZ2lvbihcbiAgICAgICAgICBwaG9uZU51bWJlcixcbiAgICAgICAgICBjb250cm9sLnZhbHVlLmlzb0NvZGVcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuO1xufTsgKi9cblxuZXhwb3J0IGNsYXNzIElvbkludGxUZWxJbnB1dFZhbGlkYXRvcnMge1xuICBzdGF0aWMgcGhvbmUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIGNvbnN0IGVycm9yID0geyBwaG9uZTogdHJ1ZSB9O1xuICAgIGxldCBwaG9uZU51bWJlcjogUGhvbmVOdW1iZXI7XG5cbiAgICBpZiAoIWNvbnRyb2wudmFsdWUpIHtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcGhvbmVOdW1iZXIgPSBQaG9uZU51bWJlclV0aWwuZ2V0SW5zdGFuY2UoKS5wYXJzZShcbiAgICAgICAgY29udHJvbC52YWx1ZS5uYXRpb25hbE51bWJlcixcbiAgICAgICAgY29udHJvbC52YWx1ZS5pc29Db2RlXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG5cbiAgICBpZiAoIXBob25lTnVtYmVyKSB7XG4gICAgICByZXR1cm4gZXJyb3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChcbiAgICAgICAgIVBob25lTnVtYmVyVXRpbC5nZXRJbnN0YW5jZSgpLmlzVmFsaWROdW1iZXJGb3JSZWdpb24oXG4gICAgICAgICAgcGhvbmVOdW1iZXIsXG4gICAgICAgICAgY29udHJvbC52YWx1ZS5pc29Db2RlXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tpb25JbnRsVGVsSW5wdXRWYWxpZF0nLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgdXNlRXhpc3Rpbmc6IElvbkludGxUZWxJbnB1dFZhbGlkYXRvckRpcmVjdGl2ZSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIElvbkludGxUZWxJbnB1dFZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gSW9uSW50bFRlbElucHV0VmFsaWRhdG9ycy5waG9uZShjb250cm9sKTtcbiAgfVxufVxuIl19