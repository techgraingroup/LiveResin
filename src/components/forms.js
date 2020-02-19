import React, { useState, useRef } from "react"
import styled from "styled-components"

import chevronDown from '../images/chevron-down.svg'

export const Select = styled(
  ({
    label,
    name,
    onChange,
    value,
    options,
    placeholder,
    color,
    bgColor,
    className,
    ...rest
  }) => {
    return (
      <div className={className} {...rest}>
        <label htmlFor={name}>{label}</label>
        <select name={name} onChange={onChange}>
          <option value="">{placeholder}</option>
          {options.map(item => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    )
  }
)`
  label {
    display: block;
    font-size: 16px;
    font-family: MontHeavy, sans-serif;
    margin-bottom: 20px;
    color: ${props => props.color || "#000"};
  }
  select {
    height: 60px;
    border: 1px solid ${props => props.color || "#000"};
    border-radius: 0;
    color: ${props => props.color || "#000"};
    width: 100%;
    max-width: 400px;
    padding: 0 10px 0 25px;
    font-family: MontHeavy, sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    background-color: ${props => props.bgColor || "#FFF"};
    background-image: url(${chevronDown});
    background-position: calc(100% - 20px) 50%;
    background-repeat: no-repeat;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`

export const TextInput = styled(
  ({ label, name, type, onChange, value, placeholder, className, ...rest }) => {
    const [active, setActive] = useState(false)
    const inputEl = useRef(null)
    const eleClass = `${className} ${active && "active"}`
    const toggleActive = stat => {
      const currentValue = inputEl.current.value
      if (!currentValue && stat === false) {
        setActive(false)
      } else {
        setActive(true)
      }
    }
    return (
      <div {...rest} className={eleClass}>
        <label htmlFor={name}>{label}</label>
        {type === "textarea" ? (
          <textarea
            ref={inputEl}
            rows={10}
            cols={10}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={() => toggleActive(true)}
            onBlur={() => toggleActive(false)}
          />
        ) : (
          <input
            ref={inputEl}
            name={name}
            type={type || "text"}
            value={value}
            onChange={onChange}
            onFocus={() => toggleActive(true)}
            onBlur={() => toggleActive(false)}
          />
        )}
      </div>
    )
  }
)`
  margin-bottom: 25px;
  border: 1px solid #000;
  position: relative;
  padding: 0 24px;
  &.active {
    label {
      transform: translate(0, 2px) scale(0.75);
      font-family: Mont, sans-serif;
    }
  }
  label {
    opacity: 0.3;
    position: absolute;
    font-size: 18px;
    margin-top: 10px;
    transform-origin: top left;
    transform: translate(0, 16px) scale(1);
    transition: all 0.1s ease-in-out;
    font-family: MontBold, sans-serif;
  }
  input,
  textarea {
    border: none;
    outline: 0;
    font-size: 18px;
    padding: 34px 0 12px;
    width: 100%;
  }
`