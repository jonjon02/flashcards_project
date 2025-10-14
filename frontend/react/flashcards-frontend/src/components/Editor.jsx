import { useEffect, useRef } from 'react'
import EditorJS from "@editorjs/editorjs";

const Editor = () => {
    const editorInstance = useRef()
    const initEditor = () => {
        const editor = new EditorJS({
            holder: 'editorjs',
            onReady: () => {
                editorInstance.current = editor
            },
            autofocus: true,
            onChange: async () => {
                let content = await editor.saver.save();

                console.log(content)
            }
        });
    }

    useEffect(() => {
        if(editorInstance.current ===null) { 
            initEditor();   
            } 
        return () => {
            editorInstance?.current?.destroy()
            editorInstance.current = null
        };
        }, [])
    return <div id='editorjs'></div>;
    }

export default Editor