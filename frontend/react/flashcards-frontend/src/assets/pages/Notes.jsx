import EditorJS from '@editorjs/editorjs';
import EditorjsList from '@editorjs/list';


const Notes = () => {

    const editor = new EditorJS({
        holder: 'editorjs',
        autofocus: true,
        onChange: async () => {
            let content = await editor.saver.save();
        },
        tools: {
            EditorjsList
        }
    });

    return (
        <div id='editorjs'></div>
    );
}
 
export default Notes;