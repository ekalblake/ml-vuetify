import appBar from './components/appBar.vue';


export default {
    component: appBar,
    title: 'appBar',
    decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
    argTypes: {
        onPinTask: {},
        onArchiveTask: {},
    },
};

const Template = args => ({
    components: { appBar },
    setup() {
        return { args};
    },
    template: '<TaskList v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in task.stories.js.
    tasks: [
        { ...Default.args.task, id: '1', title: 'Task 1' },
        { ...Default.args.task, id: '2', title: 'Task 2' },
        { ...Default.args.task, id: '3', title: 'Task 3' },
        { ...Default.args.task, id: '4', title: 'Task 4' },
        { ...Default.args.task, id: '5', title: 'Task 5' },
        { ...Default.args.task, id: '6', title: 'Task 6' },
    ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
    // Shaping the stories through args composition.
    // Inherited data coming from the Default story.
    tasks: [
        ...Default.args.tasks.slice(0, 5),
        { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    tasks: [],
    loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false,
};