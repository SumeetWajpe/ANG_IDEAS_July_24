import { AbstractControl, ValidatorFn } from "@angular/forms";

export function restrictProductTitleValidator(
  productNameRegex: RegExp,
): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let restrictedProductTitle = productNameRegex.test(control.value);
    return restrictedProductTitle
      ? { restrictedName: { value: control.value } }
      : null;
  };
}
