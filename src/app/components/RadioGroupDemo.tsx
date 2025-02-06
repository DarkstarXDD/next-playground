"use client"

import { FieldError, Label, Radio, RadioGroup } from "react-aria-components"

export default function RadioGroupDemo() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        console.log(e)
        const formData = new FormData(e.currentTarget)
        console.log(Object.fromEntries(formData))
      }}
    >
      {/* Default inputs */}
      <label htmlFor="text-box">Username</label>
      <input
        type="text"
        name="username"
        className="text-black block"
        id="text-box"
      />

      <label htmlFor="cat">Cat</label>
      <input type="radio" name="pet" id="cat" />

      <label htmlFor="cat">Dog</label>
      <input type="radio" name="pet" id="dog" />

      {/* React-Aria RadioGroup starts here */}
      <RadioGroup
        className="flex flex-col gap-2 w-full max-w-[300px]"
        name="shipping"
      >
        <Label className="text-xl text-white font-semibold font-serif">
          Answers
        </Label>

        <AnswerOption answerText="answer-1" />
        <AnswerOption answerText="answer-2" />
        <AnswerOption answerText="answer-3" />
        <AnswerOption answerText="answer-4" />

        <FieldError />
      </RadioGroup>
      <button className="px-4 py-2 bg-green-700 rounded-md">Submit!</button>
    </form>
  )
}

function AnswerOption({ answerText }: { answerText: string }) {
  return (
    <Radio
      value={answerText}
      className={({ isFocusVisible, isSelected, isPressed }) => `
      group relative flex cursor-default rounded-lg px-4 py-3 shadow-lg outline-none bg-clip-padding border border-solid
      ${
        isFocusVisible
          ? "ring-2 ring-blue-600 ring-offset-1 ring-offset-white/80"
          : ""
      }
      ${
        isSelected
          ? "bg-blue-600 border-white/30 text-white"
          : "border-transparent"
      }
      ${isPressed && !isSelected ? "bg-blue-50" : ""}
      ${!isSelected && !isPressed ? "bg-white" : ""}
    `}
    >
      <div className="flex w-full items-center justify-between gap-3">
        <p className="text-black">{answerText}</p>
      </div>
    </Radio>
  )
}
