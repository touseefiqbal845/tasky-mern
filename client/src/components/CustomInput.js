import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";
import errorImg from "../assets/information.png";

function CustomInput({
  img,
  endImg,
  title,
  placeholder,
  height = "0.2vh",
  fontWeight = 400,
  fontSize = 14,
  error,
  disabled,
  onChange,
  onKeyPress,
  onClick,
  onBlur,
  type,
  inputFontSize,
  row,
  style = {},
  showLabel = true,
  value = "",
  helperText,
  name,
}) {
  const [types, setTypes] = useState(type);

  const handleOnChange = () => {
    if (type === "password") {
      setTypes(types === "text" ? "password" : "text");
    }
  };

  return (
    <>
      {showLabel && (
        <Typography
          fontWeight={fontWeight}
          color={"#262A45"}
          mb={1}
          fontSize={fontSize}
          mt={2}
        >
          {title}
        </Typography>
      )}
      <TextField
        disabled={disabled}
        name={name}
        defaultValue={value}
        onClick={onClick}
        type={types}
        onChange={onChange}
        onKeyPress={onKeyPress}
        onBlur={onBlur}
        error={error}
        id="input-with-icon-textfield"
        variant="outlined"
        fullWidth
        multiline={!img ? true : false}
        rows={0}
        helperText={error ? helperText : ""}
        value={value}
        sx={{
          ".MuiOutlinedInput-root": {
            flexDirection: "row",
            borderRadius: 3,
            border: "1px solid #C7CADA",
            position: "unset",
            fontSize: inputFontSize || fontSize,
            color: "black",
            fontFamily: "mulish",
            
            "&.Mui-focused fieldset": {
              borderColor: "#FFC000",
            },
            ...style,
          },
          inputContainer: {},
          img: {
            paddingRight: "1rem",
          },
          input: {
            height: height,
            font: "unset",
            fontSize: inputFontSize || fontSize,
            color: "black",
            fontWeight: 400,
            transform: !img ? "translate(0, -28%)" : undefined,
            ...style,
          },
        }}
        InputProps={{
          readOnly: disabled,
          startAdornment: img ? <img width={20} height={20} src={img} /> : null,
          disableUnderline: true,
          endAdornment: endImg ? (
            error ? (
              <img
                alt="error"
                width={20}
                height={20}
                src={errorImg}
                onClick={handleOnChange}
                style={{ cursor: "pointer", paddingRight: "0px" }}
              />
            ) : (
              <img
                alt="img"
                width={20}
                height={20}
                src={endImg}
                onClick={handleOnChange}
                style={{ cursor: "pointer", paddingRight: "0px" }}
              />
            )
          ) : error ? (
            <img
              alt="error"
              width={20}
              height={20}
                src={errorImg}
              onClick={handleOnChange}
              style={{ cursor: "pointer", paddingRight: "0px" }}
            />
          ) : null,
        }}
        placeholder={placeholder}
      />
    </>
  );
}

export default CustomInput;
