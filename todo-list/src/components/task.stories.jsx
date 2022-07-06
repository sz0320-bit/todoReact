import {Task} from './task';
import '../main.css';

export default {
    title: 'Task',
    component: Task,

}

const allTasks = () => {
    return alert('hi');
}

const Template = (args) => <Task style={{}}{...args}/>;

export const primary = Template.bind({});
primary.args = {
    task:'hi',
    onDelete:{allTasks},
    onEdit:{allTasks}
}

