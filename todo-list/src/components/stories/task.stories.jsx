import {Task} from '../task';
import '../../main.css';

export default {
    title: 'Task',
    component: Task,

}



const Template = (args) => <Task style={{}}{...args}/>;

export const primary = Template.bind({});
primary.args = {
    task: {id:'fdfdkfjdf',text:'hello world'},
}

