import {Task} from '../task';
import '../../main.css';

export default {
    title: 'Task',
    component: Task,

}



const Template = (args,args1) => <div {...args1}><Task style={{}}{...args}/></div>;

export const primary = Template.bind({});
primary.args = {
    task: {id:'fdfdkfjdf',text:'hello world'},
}
primary.args1 = {
    className: 'dark',
}

