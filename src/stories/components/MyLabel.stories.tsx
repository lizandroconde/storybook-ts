
import { ComponentMeta, ComponentStory}  from "@storybook/react"
import { MyLabel } from "../../components/MyLabel";


export default{
    title: "UI/MyLabel",
    component: MyLabel,
    argTypes: {
        color: {control: "color"}
    }
} as ComponentMeta <typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args}/>


export const Basic = Template.bind({});

Basic.args = {
   size: "normal",
   allCaps: true
}

export const AllCaps = Template.bind({});

export const Secondary = Template.bind({});

export const Tertiary = Template.bind({});


Tertiary.args = {
    size: "h1",
    
}

 