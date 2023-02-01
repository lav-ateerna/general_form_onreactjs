
import HierarchicalDropdown from "./dropdown2.js";

import React, { useState } from "react";

import { Form, Input, Select, Radio, Checkbox, DatePicker } from "antd";
// import styles from "./project.css";
import styles from "./project.css";
const { Option } = Select;

function MyForm() {
const [address, setAddress] = useState([]);
const [error, setError] = useState(false)
const [form] = Form.useForm();
const [innerOptions, setInnerOptions] = useState([]);
const [options, setOptions] = useState([
{ value: "maharashtra", label: "maharashtra " },
{ value: "delhi", label: "delhi " },
{ value: "karnataka", label: "Karnataka " },
]);

const handleOuterChange = (value) => {
switch (value) {
case "maharashtra":
setInnerOptions([
{ value: "pune", label: "Pune" },
{ value: "mumbai", label: "Mumbai" },
{ value: "thane", label: "Thane" },
]);
break;
case "delhi":
setInnerOptions([
{ value: "Firozabad", label: "Firozabad" },
{ value: "new_delhi", label: "New Delhi" },
{ value: "old_delhi", label: "Old Delhi" },
]);
break;
case "karnataka":
setInnerOptions([
{ value: "bengaluru", label: "Bengaluru" },
{ value: "Shivamogga", label: "Shivamogga" },
{ value: "Chikkamagaluru", label: "Chikkamagaluru" },
]);
break;
default:
setInnerOptions([]);
}
};

const handelsubmit=(e)=>{
  e.preventDefault();
  if(address.length==0){
    setError(true)
  }
  console.log(address)
}


return (
<Form form={form} className={styles["container"]} onSubmit={handelsubmit}>
<Form.Item label="birth date" className={styles.formItem}>
<DatePicker className={styles["ant-calendar-picker"]} />
</Form.Item>
<Form.Item
label="born in maharashtra"
className={styles["ant-form-item-control"]}
>
<Checkbox />
</Form.Item>
<Form.Item
label="languages you know"
className={styles["ant-form-item-control"]}
>
<Checkbox.Group>
<Checkbox value="option1">hindi</Checkbox>
<Checkbox value="option2">marathi</Checkbox>
<Checkbox value="option3">english</Checkbox>
</Checkbox.Group>
</Form.Item>
<Form.Item label="address" >
 
<Input  onChange={e=>setAddress(e.target.value)} className={styles["ant-form-item-label"]} />
{ error&&address.length<=0?
  <label> address cannot be empty</label>:""}
</Form.Item>
<Form.Item label="state">
<Select onChange={handleOuterChange}>
{options.map((option) => (
<Option key={option.value} value={option.value}>
{option.label}
</Option>
))}
</Select>
</Form.Item>
<Form.Item label="city">
<Select>
{innerOptions.map((option) => (
  <Option key={option.value} value={option.value}>{option.label}</Option>
))}
</Select>
<Form.Item label="state">
 <HierarchicalDropdown></HierarchicalDropdown>
</Form.Item>
</Form.Item>
<Form.Item label="gender">
<Radio.Group>
<Radio value="male">male</Radio>
<Radio value="female">female</Radio>
</Radio.Group>
</Form.Item>
<Form.Item>
<button type="submit" onClick={handelsubmit}>
submit
</button>
</Form.Item>
</Form>
);
}
export default MyForm;