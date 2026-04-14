import{j as e,l as o,R as q}from"./iframe-DdPyZX1J.js";import{F as n}from"./form-DceNoCRt.js";import{I as r}from"./input-DT4LCOzI.js";import{F as f}from"./flex-BfqM8Xj1.js";import{B as t}from"./button-DijB0cC7.js";import{S as u}from"./select-CLodoWmc.js";import{T}from"./typography-C45YHkQs.js";import"./preload-helper-PPVm8Dsz.js";import"./ExclamationCircleFilled-BWrKomaa.js";import"./pickAttrs-BoNuQqbq.js";import"./SearchOutlined-DRRTld7i.js";import"./Button-DrbN7IsE.js";import"./client-C2mglbAP.js";import"./Overflow-B1ZTHW7j.js";import"./extends-CF3RwP-h.js";const{Text:v,Title:S}=T,$={title:"Components/Form",component:n,tags:["autodocs"],argTypes:{layout:{control:"select",options:["horizontal","vertical","inline"],description:"Расположение элементов формы"},labelAlign:{control:"select",options:["left","right"],description:"Выравнивание меток"},labelCol:{control:"object",description:"Настройки колонки для меток (span, offset)"},wrapperCol:{control:"object",description:"Настройки колонки для полей"},colon:{control:"boolean",description:"Показывать двоеточие после метки"},disabled:{control:"boolean",description:"Отключить все поля формы"},size:{control:"select",options:["small","middle","large"],description:"Размер полей формы"},onFinish:{action:"form submitted"},onFinishFailed:{action:"form submission failed"}},parameters:{layout:"padded",backgrounds:{default:"light"}}},d={render:()=>{const[s]=n.useForm(),a=m=>{console.log("Success:",m)},l=m=>{console.log("Failed:",m)};return e.jsxs(n,{form:s,name:"basic",layout:"vertical",onFinish:a,onFinishFailed:l,style:{width:"400px"},children:[e.jsx(n.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:e.jsx(r,{placeholder:"Enter username"})}),e.jsx(n.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:e.jsx(r.Password,{placeholder:"Enter password"})}),e.jsx(n.Item,{children:e.jsxs(f,{gap:o.spacing.sm,children:[e.jsx(t,{type:"primary",htmlType:"submit",children:"Submit"}),e.jsx(t,{htmlType:"button",onClick:()=>s.resetFields(),children:"Reset"})]})})]})}},c={render:()=>{const s=a=>{console.log("Success:",a)};return e.jsxs(n,{name:"horizontal",layout:"horizontal",labelCol:{span:6},wrapperCol:{span:18},onFinish:s,style:{width:"600px"},children:[e.jsx(n.Item,{label:"Name",name:"name",rules:[{required:!0}],children:e.jsx(r,{placeholder:"Enter name"})}),e.jsx(n.Item,{label:"Email",name:"email",rules:[{required:!0,type:"email"}],children:e.jsx(r,{placeholder:"Enter email"})}),e.jsx(n.Item,{label:"Role",name:"role",children:e.jsx(u,{options:[{label:"Admin",value:"admin"},{label:"User",value:"user"}],placeholder:"Select role"})}),e.jsx(n.Item,{wrapperCol:{offset:6,span:18},children:e.jsx(t,{type:"primary",htmlType:"submit",children:"Submit"})})]})}},p={render:()=>{const s=a=>{console.log("Success:",a)};return e.jsxs(n,{name:"vertical",layout:"vertical",onFinish:s,style:{width:"400px"},children:[e.jsx(n.Item,{label:"Name",name:"name",rules:[{required:!0}],children:e.jsx(r,{placeholder:"Enter name"})}),e.jsx(n.Item,{label:"Email",name:"email",rules:[{required:!0,type:"email"}],children:e.jsx(r,{placeholder:"Enter email"})}),e.jsx(n.Item,{label:"Role",name:"role",children:e.jsx(u,{options:[{label:"Admin",value:"admin"},{label:"User",value:"user"}],placeholder:"Select role"})}),e.jsx(n.Item,{children:e.jsx(t,{type:"primary",htmlType:"submit",children:"Submit"})})]})}},h={render:()=>{const s=a=>{console.log("Success:",a)};return e.jsxs(n,{name:"inline",layout:"inline",onFinish:s,style:{width:"100%"},children:[e.jsx(n.Item,{name:"username",rules:[{required:!0}],children:e.jsx(r,{placeholder:"Username"})}),e.jsx(n.Item,{name:"password",rules:[{required:!0}],children:e.jsx(r.Password,{placeholder:"Password"})}),e.jsx(n.Item,{children:e.jsx(t,{type:"primary",htmlType:"submit",children:"Login"})})]})}},y={render:()=>{const s=a=>{console.log("Success:",a)};return e.jsxs(n,{name:"validation",layout:"vertical",onFinish:s,style:{width:"400px"},children:[e.jsx(n.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Username is required"},{min:3,message:"Username must be at least 3 characters"},{max:20,message:"Username cannot exceed 20 characters"}],children:e.jsx(r,{placeholder:"Enter username (3-20 characters)"})}),e.jsx(n.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Email is required"},{type:"email",message:"Please enter a valid email"}],children:e.jsx(r,{placeholder:"Enter email"})}),e.jsx(n.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Password is required"},{min:6,message:"Password must be at least 6 characters"}],children:e.jsx(r.Password,{placeholder:"Enter password (min 6 characters)"})}),e.jsx(n.Item,{label:"Confirm Password",name:"confirm",dependencies:["password"],rules:[{required:!0,message:"Please confirm your password"},({getFieldValue:a})=>({validator(l,m){return!m||a("password")===m?Promise.resolve():Promise.reject(new Error("Passwords do not match"))}})],children:e.jsx(r.Password,{placeholder:"Confirm password"})}),e.jsx(n.Item,{children:e.jsx(t,{type:"primary",htmlType:"submit",children:"Register"})})]})}},F={render:()=>{const s=a=>{console.log("Success:",a)};return e.jsxs(n,{name:"custom",layout:"vertical",onFinish:s,style:{width:"400px"},children:[e.jsx(n.Item,{label:"Age",name:"age",rules:[{required:!0,message:"Age is required"},{validator:(a,l)=>l&&(typeof l=="number"||typeof l=="string")&&(Number(l)<18||Number(l)>100)?Promise.reject(new Error("Age must be between 18 and 100")):Promise.resolve()}],children:e.jsx(r,{type:"number",placeholder:"Enter age (18-100)"})}),e.jsx(n.Item,{label:"Website",name:"website",rules:[{validator:(a,l)=>l&&typeof l=="string"&&!l.match(/^https?:\/\/.+/)?Promise.reject(new Error("Please enter a valid URL starting with http:// or https://")):Promise.resolve()}],children:e.jsx(r,{placeholder:"Enter website URL"})}),e.jsx(n.Item,{children:e.jsx(t,{type:"primary",htmlType:"submit",children:"Submit"})})]})}},g={render:()=>{const s=a=>{console.log("Success:",a)};return e.jsxs(n,{name:"dynamic",layout:"vertical",onFinish:s,style:{width:"500px"},children:[e.jsx(n.List,{name:"users",children:(a,{add:l,remove:m})=>e.jsxs(e.Fragment,{children:[a.map((i,P)=>e.jsxs(f,{gap:o.spacing.sm,align:"flex-start",style:{marginBottom:o.spacing.md},children:[e.jsx(n.Item,{...i,name:[i.name,"name"],rules:[{required:!0,message:"Name is required"}],style:{flex:1,marginBottom:0},children:e.jsx(r,{placeholder:`User ${P+1} name`})}),e.jsx(n.Item,{...i,name:[i.name,"email"],rules:[{required:!0,type:"email",message:"Valid email is required"}],style:{flex:1,marginBottom:0},children:e.jsx(r,{placeholder:`User ${P+1} email`})}),e.jsx(t,{danger:!0,onClick:()=>m(i.name),children:"Remove"})]},i.key)),e.jsx(n.Item,{children:e.jsx(t,{type:"dashed",onClick:()=>l(),block:!0,children:"+ Add User"})})]})}),e.jsx(n.Item,{children:e.jsx(t,{type:"primary",htmlType:"submit",children:"Submit"})})]})}},b={render:()=>{const s=a=>{console.log("Success:",a)};return e.jsxs(n,{name:"nested",layout:"vertical",onFinish:s,style:{width:"500px"},children:[e.jsx(n.Item,{label:"Company Name",name:["company","name"],rules:[{required:!0}],children:e.jsx(r,{placeholder:"Company name"})}),e.jsx(n.Item,{label:"Company Address",name:["company","address"],children:e.jsx(r,{placeholder:"Company address"})}),e.jsx(S,{level:5,style:{marginTop:o.spacing.md},children:"Contact Person"}),e.jsx(n.Item,{label:"First Name",name:["contact","firstName"],rules:[{required:!0}],children:e.jsx(r,{placeholder:"First name"})}),e.jsx(n.Item,{label:"Last Name",name:["contact","lastName"],rules:[{required:!0}],children:e.jsx(r,{placeholder:"Last name"})}),e.jsx(n.Item,{label:"Phone",name:["contact","phone"],children:e.jsx(r,{placeholder:"Phone number"})}),e.jsx(n.Item,{children:e.jsx(t,{type:"primary",htmlType:"submit",children:"Submit"})})]})}},x={render:()=>{const[s,a]=q.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(f,{gap:o.spacing.sm,style:{marginBottom:o.spacing.md},children:e.jsxs(t,{onClick:()=>a(!s),children:[s?"Enable":"Disable"," Form"]})}),e.jsxs(n,{name:"disabled",layout:"vertical",disabled:s,style:{width:"400px"},initialValues:{username:"john_doe",email:"john@example.com",role:"user"},children:[e.jsx(n.Item,{label:"Username",name:"username",children:e.jsx(r,{})}),e.jsx(n.Item,{label:"Email",name:"email",children:e.jsx(r,{})}),e.jsx(n.Item,{label:"Role",name:"role",children:e.jsx(u,{options:[{label:"Admin",value:"admin"},{label:"User",value:"user"}]})}),e.jsx(n.Item,{children:e.jsx(t,{type:"primary",htmlType:"submit",disabled:s,children:"Submit"})})]})]})}},I={render:()=>{const s=a=>{console.log("Success:",a)};return e.jsxs(f,{vertical:!0,gap:o.spacing.lg,style:{width:"400px"},children:[e.jsxs("div",{children:[e.jsx(v,{strong:!0,children:"Small Size"}),e.jsxs(n,{name:"small",layout:"vertical",size:"small",onFinish:s,style:{marginTop:o.spacing.sm},children:[e.jsx(n.Item,{label:"Name",name:"name",children:e.jsx(r,{placeholder:"Small input"})}),e.jsx(n.Item,{children:e.jsx(t,{type:"primary",htmlType:"submit",size:"small",children:"Submit"})})]})]}),e.jsxs("div",{children:[e.jsx(v,{strong:!0,children:"Middle Size (Default)"}),e.jsxs(n,{name:"middle",layout:"vertical",size:"middle",onFinish:s,style:{marginTop:o.spacing.sm},children:[e.jsx(n.Item,{label:"Name",name:"name",children:e.jsx(r,{placeholder:"Middle input"})}),e.jsx(n.Item,{children:e.jsx(t,{type:"primary",htmlType:"submit",children:"Submit"})})]})]}),e.jsxs("div",{children:[e.jsx(v,{strong:!0,children:"Large Size"}),e.jsxs(n,{name:"large",layout:"vertical",size:"large",onFinish:s,style:{marginTop:o.spacing.sm},children:[e.jsx(n.Item,{label:"Name",name:"name",children:e.jsx(r,{placeholder:"Large input"})}),e.jsx(n.Item,{children:e.jsx(t,{type:"primary",htmlType:"submit",size:"large",children:"Submit"})})]})]})]})}},j={render:()=>{const[s]=n.useForm(),a=l=>{console.log("Registration success:",l)};return e.jsxs(n,{form:s,name:"registration",layout:"vertical",onFinish:a,style:{width:"500px"},initialValues:{agreement:!1},children:[e.jsx(S,{level:3,children:"Create Account"}),e.jsx(v,{type:"secondary",style:{marginBottom:o.spacing.lg,display:"block"},children:"Please fill in the information below"}),e.jsx(n.Item,{label:"Full Name",name:"fullName",rules:[{required:!0,message:"Please enter your full name"}],children:e.jsx(r,{placeholder:"John Doe"})}),e.jsx(n.Item,{label:"Email Address",name:"email",rules:[{required:!0,message:"Please enter your email"},{type:"email",message:"Please enter a valid email"}],children:e.jsx(r,{placeholder:"john@example.com"})}),e.jsx(n.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please create a password"},{min:8,message:"Password must be at least 8 characters"}],help:"Password must be at least 8 characters",children:e.jsx(r.Password,{placeholder:"Create a strong password"})}),e.jsx(n.Item,{label:"Confirm Password",name:"confirmPassword",dependencies:["password"],rules:[{required:!0,message:"Please confirm your password"},({getFieldValue:l})=>({validator(m,i){return!i||l("password")===i?Promise.resolve():Promise.reject(new Error("Passwords do not match"))}})],children:e.jsx(r.Password,{placeholder:"Confirm your password"})}),e.jsx(n.Item,{name:"role",label:"Role",rules:[{required:!0,message:"Please select your role"}],children:e.jsx(u,{options:[{label:"Developer",value:"developer"},{label:"Designer",value:"designer"},{label:"Product Manager",value:"pm"},{label:"Other",value:"other"}],placeholder:"Select your role"})}),e.jsx(n.Item,{children:e.jsx(t,{type:"primary",htmlType:"submit",block:!0,size:"large",children:"Create Account"})})]})}},w={args:{layout:"vertical",labelAlign:"left",colon:!0,disabled:!1,size:"middle",children:null},render:s=>{const a=l=>{console.log("Success:",l)};return e.jsxs(n,{...s,name:"playground",onFinish:a,style:{width:"500px"},children:[e.jsx(n.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Username is required"}],children:e.jsx(r,{placeholder:"Enter username"})}),e.jsx(n.Item,{label:"Email",name:"email",rules:[{required:!0,type:"email",message:"Valid email is required"}],children:e.jsx(r,{placeholder:"Enter email"})}),e.jsx(n.Item,{label:"Role",name:"role",rules:[{required:!0,message:"Role is required"}],children:e.jsx(u,{options:[{label:"Admin",value:"admin"},{label:"User",value:"user"},{label:"Guest",value:"guest"}],placeholder:"Select role"})}),e.jsx(n.Item,{children:e.jsx(t,{type:"primary",htmlType:"submit",children:"Submit"})})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [form] = Form.useForm();
    const onFinish = (values: unknown) => {
      console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo: unknown) => {
      console.log('Failed:', errorInfo);
    };
    return <Form form={form} name='basic' layout='vertical' onFinish={onFinish} onFinishFailed={onFinishFailed} style={{
      width: '400px'
    }}>
        <Form.Item label='Username' name='username' rules={[{
        required: true,
        message: 'Please input your username!'
      }]}>
          <Input placeholder='Enter username' />
        </Form.Item>

        <Form.Item label='Password' name='password' rules={[{
        required: true,
        message: 'Please input your password!'
      }]}>
          <Input.Password placeholder='Enter password' />
        </Form.Item>

        <Form.Item>
          <Flex gap={layoutTokens.spacing.sm}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
            <Button htmlType='button' onClick={() => form.resetFields()}>
              Reset
            </Button>
          </Flex>
        </Form.Item>
      </Form>;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const onFinish = (values: unknown) => {
      console.log('Success:', values);
    };
    return <Form name='horizontal' layout='horizontal' labelCol={{
      span: 6
    }} wrapperCol={{
      span: 18
    }} onFinish={onFinish} style={{
      width: '600px'
    }}>
        <Form.Item label='Name' name='name' rules={[{
        required: true
      }]}>
          <Input placeholder='Enter name' />
        </Form.Item>

        <Form.Item label='Email' name='email' rules={[{
        required: true,
        type: 'email'
      }]}>
          <Input placeholder='Enter email' />
        </Form.Item>

        <Form.Item label='Role' name='role'>
          <Select options={[{
          label: 'Admin',
          value: 'admin'
        }, {
          label: 'User',
          value: 'user'
        }]} placeholder='Select role' />
        </Form.Item>

        <Form.Item wrapperCol={{
        offset: 6,
        span: 18
      }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>;
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const onFinish = (values: unknown) => {
      console.log('Success:', values);
    };
    return <Form name='vertical' layout='vertical' onFinish={onFinish} style={{
      width: '400px'
    }}>
        <Form.Item label='Name' name='name' rules={[{
        required: true
      }]}>
          <Input placeholder='Enter name' />
        </Form.Item>

        <Form.Item label='Email' name='email' rules={[{
        required: true,
        type: 'email'
      }]}>
          <Input placeholder='Enter email' />
        </Form.Item>

        <Form.Item label='Role' name='role'>
          <Select options={[{
          label: 'Admin',
          value: 'admin'
        }, {
          label: 'User',
          value: 'user'
        }]} placeholder='Select role' />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>;
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const onFinish = (values: unknown) => {
      console.log('Success:', values);
    };
    return <Form name='inline' layout='inline' onFinish={onFinish} style={{
      width: '100%'
    }}>
        <Form.Item name='username' rules={[{
        required: true
      }]}>
          <Input placeholder='Username' />
        </Form.Item>

        <Form.Item name='password' rules={[{
        required: true
      }]}>
          <Input.Password placeholder='Password' />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Login
          </Button>
        </Form.Item>
      </Form>;
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const onFinish = (values: unknown) => {
      console.log('Success:', values);
    };
    return <Form name='validation' layout='vertical' onFinish={onFinish} style={{
      width: '400px'
    }}>
        <Form.Item label='Username' name='username' rules={[{
        required: true,
        message: 'Username is required'
      }, {
        min: 3,
        message: 'Username must be at least 3 characters'
      }, {
        max: 20,
        message: 'Username cannot exceed 20 characters'
      }]}>
          <Input placeholder='Enter username (3-20 characters)' />
        </Form.Item>

        <Form.Item label='Email' name='email' rules={[{
        required: true,
        message: 'Email is required'
      }, {
        type: 'email',
        message: 'Please enter a valid email'
      }]}>
          <Input placeholder='Enter email' />
        </Form.Item>

        <Form.Item label='Password' name='password' rules={[{
        required: true,
        message: 'Password is required'
      }, {
        min: 6,
        message: 'Password must be at least 6 characters'
      }]}>
          <Input.Password placeholder='Enter password (min 6 characters)' />
        </Form.Item>

        <Form.Item label='Confirm Password' name='confirm' dependencies={['password']} rules={[{
        required: true,
        message: 'Please confirm your password'
      }, ({
        getFieldValue
      }) => ({
        validator(_, value) {
          if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
          }
          return Promise.reject(new Error('Passwords do not match'));
        }
      })]}>
          <Input.Password placeholder='Confirm password' />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Register
          </Button>
        </Form.Item>
      </Form>;
  }
}`,...y.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const onFinish = (values: unknown) => {
      console.log('Success:', values);
    };
    return <Form name='custom' layout='vertical' onFinish={onFinish} style={{
      width: '400px'
    }}>
        <Form.Item label='Age' name='age' rules={[{
        required: true,
        message: 'Age is required'
      }, {
        validator: (_, value) => {
          if (value && (typeof value === 'number' || typeof value === 'string') && (Number(value) < 18 || Number(value) > 100)) {
            return Promise.reject(new Error('Age must be between 18 and 100'));
          }
          return Promise.resolve();
        }
      }]}>
          <Input type='number' placeholder='Enter age (18-100)' />
        </Form.Item>

        <Form.Item label='Website' name='website' rules={[{
        validator: (_, value) => {
          if (value && typeof value === 'string' && !value.match(/^https?:\\/\\/.+/)) {
            return Promise.reject(new Error('Please enter a valid URL starting with http:// or https://'));
          }
          return Promise.resolve();
        }
      }]}>
          <Input placeholder='Enter website URL' />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>;
  }
}`,...F.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const onFinish = (values: unknown) => {
      console.log('Success:', values);
    };
    return <Form name='dynamic' layout='vertical' onFinish={onFinish} style={{
      width: '500px'
    }}>
        <Form.List name='users'>
          {(fields, {
          add,
          remove
        }) => <>
              {fields.map((field, index) => <Flex key={field.key} gap={layoutTokens.spacing.sm} align='flex-start' style={{
            marginBottom: layoutTokens.spacing.md
          }}>
                  <Form.Item {...field} name={[field.name, 'name']} rules={[{
              required: true,
              message: 'Name is required'
            }]} style={{
              flex: 1,
              marginBottom: 0
            }}>
                    <Input placeholder={\`User \${index + 1} name\`} />
                  </Form.Item>
                  <Form.Item {...field} name={[field.name, 'email']} rules={[{
              required: true,
              type: 'email',
              message: 'Valid email is required'
            }]} style={{
              flex: 1,
              marginBottom: 0
            }}>
                    <Input placeholder={\`User \${index + 1} email\`} />
                  </Form.Item>
                  <Button danger onClick={() => remove(field.name)}>
                    Remove
                  </Button>
                </Flex>)}
              <Form.Item>
                <Button type='dashed' onClick={() => add()} block>
                  + Add User
                </Button>
              </Form.Item>
            </>}
        </Form.List>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>;
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const onFinish = (values: unknown) => {
      console.log('Success:', values);
    };
    return <Form name='nested' layout='vertical' onFinish={onFinish} style={{
      width: '500px'
    }}>
        <Form.Item label='Company Name' name={['company', 'name']} rules={[{
        required: true
      }]}>
          <Input placeholder='Company name' />
        </Form.Item>

        <Form.Item label='Company Address' name={['company', 'address']}>
          <Input placeholder='Company address' />
        </Form.Item>

        <Title level={5} style={{
        marginTop: layoutTokens.spacing.md
      }}>
          Contact Person
        </Title>

        <Form.Item label='First Name' name={['contact', 'firstName']} rules={[{
        required: true
      }]}>
          <Input placeholder='First name' />
        </Form.Item>

        <Form.Item label='Last Name' name={['contact', 'lastName']} rules={[{
        required: true
      }]}>
          <Input placeholder='Last name' />
        </Form.Item>

        <Form.Item label='Phone' name={['contact', 'phone']}>
          <Input placeholder='Phone number' />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>;
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [disabled, setDisabled] = React.useState(true);
    return <>
        <Flex gap={layoutTokens.spacing.sm} style={{
        marginBottom: layoutTokens.spacing.md
      }}>
          <Button onClick={() => setDisabled(!disabled)}>
            {disabled ? 'Enable' : 'Disable'} Form
          </Button>
        </Flex>
        <Form name='disabled' layout='vertical' disabled={disabled} style={{
        width: '400px'
      }} initialValues={{
        username: 'john_doe',
        email: 'john@example.com',
        role: 'user'
      }}>
          <Form.Item label='Username' name='username'>
            <Input />
          </Form.Item>

          <Form.Item label='Email' name='email'>
            <Input />
          </Form.Item>

          <Form.Item label='Role' name='role'>
            <Select options={[{
            label: 'Admin',
            value: 'admin'
          }, {
            label: 'User',
            value: 'user'
          }]} />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit' disabled={disabled}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>;
  }
}`,...x.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const onFinish = (values: unknown) => {
      console.log('Success:', values);
    };
    return <Flex vertical gap={layoutTokens.spacing.lg} style={{
      width: '400px'
    }}>
        <div>
          <Text strong>Small Size</Text>
          <Form name='small' layout='vertical' size='small' onFinish={onFinish} style={{
          marginTop: layoutTokens.spacing.sm
        }}>
            <Form.Item label='Name' name='name'>
              <Input placeholder='Small input' />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit' size='small'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div>
          <Text strong>Middle Size (Default)</Text>
          <Form name='middle' layout='vertical' size='middle' onFinish={onFinish} style={{
          marginTop: layoutTokens.spacing.sm
        }}>
            <Form.Item label='Name' name='name'>
              <Input placeholder='Middle input' />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div>
          <Text strong>Large Size</Text>
          <Form name='large' layout='vertical' size='large' onFinish={onFinish} style={{
          marginTop: layoutTokens.spacing.sm
        }}>
            <Form.Item label='Name' name='name'>
              <Input placeholder='Large input' />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit' size='large'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Flex>;
  }
}`,...I.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [form] = Form.useForm();
    const onFinish = (values: unknown) => {
      console.log('Registration success:', values);
    };
    return <Form form={form} name='registration' layout='vertical' onFinish={onFinish} style={{
      width: '500px'
    }} initialValues={{
      agreement: false
    }}>
        <Title level={3}>Create Account</Title>
        <Text type='secondary' style={{
        marginBottom: layoutTokens.spacing.lg,
        display: 'block'
      }}>
          Please fill in the information below
        </Text>

        <Form.Item label='Full Name' name='fullName' rules={[{
        required: true,
        message: 'Please enter your full name'
      }]}>
          <Input placeholder='John Doe' />
        </Form.Item>

        <Form.Item label='Email Address' name='email' rules={[{
        required: true,
        message: 'Please enter your email'
      }, {
        type: 'email',
        message: 'Please enter a valid email'
      }]}>
          <Input placeholder='john@example.com' />
        </Form.Item>

        <Form.Item label='Password' name='password' rules={[{
        required: true,
        message: 'Please create a password'
      }, {
        min: 8,
        message: 'Password must be at least 8 characters'
      }]} help='Password must be at least 8 characters'>
          <Input.Password placeholder='Create a strong password' />
        </Form.Item>

        <Form.Item label='Confirm Password' name='confirmPassword' dependencies={['password']} rules={[{
        required: true,
        message: 'Please confirm your password'
      }, ({
        getFieldValue
      }) => ({
        validator(_, value) {
          if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
          }
          return Promise.reject(new Error('Passwords do not match'));
        }
      })]}>
          <Input.Password placeholder='Confirm your password' />
        </Form.Item>

        <Form.Item name='role' label='Role' rules={[{
        required: true,
        message: 'Please select your role'
      }]}>
          <Select options={[{
          label: 'Developer',
          value: 'developer'
        }, {
          label: 'Designer',
          value: 'designer'
        }, {
          label: 'Product Manager',
          value: 'pm'
        }, {
          label: 'Other',
          value: 'other'
        }]} placeholder='Select your role' />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit' block size='large'>
            Create Account
          </Button>
        </Form.Item>
      </Form>;
  }
}`,...j.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'vertical',
    labelAlign: 'left',
    colon: true,
    disabled: false,
    size: 'middle',
    children: null
  },
  render: args => {
    const onFinish = (values: unknown) => {
      console.log('Success:', values);
    };
    return <Form {...args} name='playground' onFinish={onFinish} style={{
      width: '500px'
    }}>
        <Form.Item label='Username' name='username' rules={[{
        required: true,
        message: 'Username is required'
      }]}>
          <Input placeholder='Enter username' />
        </Form.Item>

        <Form.Item label='Email' name='email' rules={[{
        required: true,
        type: 'email',
        message: 'Valid email is required'
      }]}>
          <Input placeholder='Enter email' />
        </Form.Item>

        <Form.Item label='Role' name='role' rules={[{
        required: true,
        message: 'Role is required'
      }]}>
          <Select options={[{
          label: 'Admin',
          value: 'admin'
        }, {
          label: 'User',
          value: 'user'
        }, {
          label: 'Guest',
          value: 'guest'
        }]} placeholder='Select role' />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>;
  }
}`,...w.parameters?.docs?.source}}};const O=["Basic","HorizontalLayout","VerticalLayout","InlineLayout","WithValidation","CustomValidation","DynamicFields","NestedFields","DisabledForm","Sizes","RegistrationForm","Playground"];export{d as Basic,F as CustomValidation,x as DisabledForm,g as DynamicFields,c as HorizontalLayout,h as InlineLayout,b as NestedFields,w as Playground,j as RegistrationForm,I as Sizes,p as VerticalLayout,y as WithValidation,O as __namedExportsOrder,$ as default};
