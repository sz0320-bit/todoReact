import AddTask from "../AddTask";
import '../../main.css';

export default {
    title: 'AddTask',
    component: AddTask,

}



const Template = (args) => <AddTask style={{}}{...args}/>;

export const primary = Template.bind({});
primary.args = {
    onclick:   () => {alert('clicked')}
}