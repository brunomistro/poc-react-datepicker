"use client";

import { useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";

import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";

export default function ComponentRange() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    registerLocale("ptBr", ptBR);
  }, []);

  const onChangeHandle = (dates: [any, any]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    console.log(start, end);
  };

  return (
    <DatePicker
      // configs for range picker and 2 months show
      onChange={onChangeHandle}
      startDate={startDate}
      endDate={endDate}
      monthsShown={2}
      selectsRange
      // format date pt-br
      dateFormat="P"
      locale="ptBr"
      // styles
      isClearable
      fixedHeight
      placeholderText="Selecione período"
      className="border border-solid border-[#aeaeae] rounded shadow-[inset_0_2px_2px_#e9e9e9] text-lg px-2.5 py-1.5"
    />
  );
}
