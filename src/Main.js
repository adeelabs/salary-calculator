import { Fragment, React, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { InputFrame } from "./InputFrame";
import { SignBlock } from "./SignBlock";

export const Main = (props) => {

  const onChangeCTC = (CTCamount) => {
    const CTC = Number(String(CTCamount).replace(/,/g, ''));
    const datagridBase = [
      {
        columnTitle: 'CTC',
        accountHeads: [
          {
            accountHeadTitle: 'Basic',
            amount: CTC * 50 / 100,
          },
          {
            accountHeadTitle: 'HRA',
            amount: CTC * 20 / 100,
          },
          {
            accountHeadTitle: 'Travel Allowance',
            amount: CTC * 6 / 100,
          },
          {
            accountHeadTitle: 'Special Allowance',
            amount: CTC * 20 / 100,
          },
          {
            accountHeadTitle: 'Provident Fund',
            amount: CTC * 4 / 100,
          },
        ]
      },
      {
        columnTitle: 'Deductions',
        accountHeads: [
          {
            accountHeadTitle: 'Provident Fund',
            amount: CTC * 12 / 100,
          },
          {
            accountHeadTitle: 'TDS',
            amount: CTC * 20 / 100,
          },
          {
            accountHeadTitle: 'Health Insurance',
            amount: 3000,
          },
        ]
      },
      {
        columnTitle: 'CashInHand',
        accountHeads: [
          {
            accountHeadTitle: 'Total Payable',
            amount: 0,
          }
        ]
      },
    ];
    props.setDatagrid(datagridBase);
    props.setCTC(CTCamount);
  }
  return (
    <div className="main-container">
      <InputFrame heading="Enter Annual CTC" onChange={onChangeCTC} value={props.CTC} />
      <SignBlock sign="-" />
      <InputFrame heading="Deductions" disabled value={454654} />
      <SignBlock sign="=" />
      <InputFrame heading="Cash In Hand" disabled value={454654} />
    </div>
  );
};
