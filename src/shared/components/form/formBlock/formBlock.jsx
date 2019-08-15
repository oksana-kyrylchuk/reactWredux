import React from "react";
import get from "lodash/get";

import {Typography, Button, Check} from "shared/vendors";

import {ImageField, SelectField} from "../../form";
import {InputField, RadioField} from "../formFields";
import {ToggleEditor} from "../toggleEditor";

import {Layout1} from "./layouts";

export const getFormField = (props)=>{
  const {formField, data} = props;

  const type = get(formField,'type','text');
  const label = get(formField,'label','');
  const placeholder = get(formField,'params.placeholder','');
  const name = get(formField,'params.name','');
  const radioButtons = get(formField,'params.radioButtons',[]);
  const handleChangeValue = get(formField,'onChange',null);
  console.log(444444444444);
  console.log(props);
  console.log(5555555555);

  switch(type){
    case 'image':
      return <ImageField key={get(data,'id')} data={data} formField={formField} />;

    case 'text' :
    case 'password':
    default:
      // return <InputField handleChangeValue={} label={} type={} value={} />
      return <ToggleEditor
        InputField={()=> <InputField type={type}
                                     label={label}
                                     value={data.login}
                                     placeholder={placeholder}
                                     handleChangeValue={data.handleChangeValue}
        /> }
        ConfirmationButton={ (props) => <Button onClick={props.onClick}><Check/></Button> }
        Typography={ (props) => <Typography onClick={props.onClick}>{data.login}</Typography> }
      />;

    case 'select' :
      return <SelectField isSelectFieldClearable

                          label={label}
                          name={name}
                          // items={}
      />;
    case 'radio' :
      return <RadioField label={label} value={data.value} radioButtons={radioButtons} handleChangeValue={handleChangeValue}/>
  }
};

const getLayout = ({formConfig, data})=>{
  switch (get(formConfig,'layout','layout1')) {
    case 'layout1':
    default:
      return <Layout1 formConfig={formConfig} data={data} />
  }
};

const FormBlockComponent = ({onSubmit, formConfig, data}) => {
  return (
    <form onSubmit={onSubmit} >
      { getLayout({formConfig, data}) }
    </form>
  );
};

export default FormBlockComponent
