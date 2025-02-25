import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { useController, Control, FieldValues, FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface ControlMUITextFieldProps extends Omit<TextFieldProps, 'name' | 'control' | 'defaultValue' | 'onChange'> {
    name: string;
    control: Control<FieldValues>;
    defaultValue?: any;
    readOnly?: boolean;
    inputProps?: any;
    rules?: any; // You can further define this if you have specific rules
    onChange?: (e: any) => void;
    variant?: "filled" | "outlined" | "standard";
    serverValidation?: Record<string, string[]>;
    label?: string;
}

const ControlMUITextField: React.FC<ControlMUITextFieldProps> = (props) => {
    const {
        name,
        control,
        defaultValue,
        readOnly,
        inputProps,
        rules,
        onChange,
        variant,
        serverValidation,
        label,
        ...restProps
    } = props;

    const { t } = useTranslation();

    const {
        formState: { errors: formErrors },
        field: { ref, onChange: fieldChange, ...fieldProps },
    } = useController({
        name,
        control,
        rules: {
            ...rules,
            ...(rules && {
                validate: {
                    whiteSpace: (value: string) => {
                        if (value && typeof value === "string") {
                            return !!value.trim() || t("fieldIsRequired");
                        }
                    },
                    ...(rules["validate"] && rules["validate"]),
                },
            }),
        },
        defaultValue: defaultValue ?? "",
    });

    // Type guard for nested errors
    const getNestedError = (
        errors: FieldErrorsImpl<FieldValues>,
        keys: string[]
    ): FieldError | undefined => {
        return keys.reduce<FieldError | undefined>((err, key) => {
            if (err && typeof err === "object" && key in err) {
                const nestedError = (err as unknown as Record<string, FieldError | Merge<FieldError, FieldErrorsImpl<any>>>)[key];
                if (nestedError && "type" in nestedError) {
                    return nestedError as FieldError;
                }
            }
            return undefined;
        }, errors as unknown as FieldError);
    };

    const errorName = name.includes(".") ? name.split(".") : [name];
    const serverError = errorName.length > 1 ? errorName[1] : name;
    const fieldError = errorName.length > 1
        ? getNestedError(formErrors, errorName)
        : (formErrors?.[name] as FieldError);

    const isRequired =
        (rules && rules?.required) ||
        (rules?.validate?.max && typeof rules?.validate?.max === "string") ||
        (rules?.validate?.require &&
            typeof rules?.validate?.require === "string");

    return (
        <TextField
            inputRef={ref}
            {...fieldProps}
            {...restProps}
            label={isRequired ? label + " *" : label}
            defaultValue={defaultValue}
            autoComplete="off"
            id={name}
            variant={variant || "filled"}
            fullWidth
            multiline={!!props.rows}
            error={Boolean(fieldError || serverValidation?.[serverError])}
            helperText={
                fieldError
                    ? fieldError.message
                    : Boolean(serverValidation) && serverValidation?.[serverError]
                        ? serverValidation?.[serverError][0]
                        : null
            }
            inputProps={{
                readOnly: readOnly,
                ...inputProps,
            }}
            onChange={(e) => {
                fieldChange(e);
                onChange && onChange(e);
            }}
            size="small"
        />
    );
};

export default ControlMUITextField;
