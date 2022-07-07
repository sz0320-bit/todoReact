import SubmitTask from "../SubmitTask";
import '../../main.css';

export default {
    title: 'AddTask',
    component: SubmitTask,

}



const Template = (args) => <SubmitTask style={{}}{...args}/>;

export const primary = Template.bind({});
