
import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function Assignment() {
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  const editorRef = useRef(null);


  return (


    <>
    <div className="card flex items-center text-3xl font-medium">
      <div className='card-body'>
        <p>Write a Assignments/Notes </p>
      </div>

    </div>
      <Editor
        apiKey='zz04k1tc5w8gnogwyss4cpp7yxez5jbxi7enlubc6gyrku9k'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <div className='flex items-center justify-center'>
        <button type='submit' size="lg"
          className="inline-flex items-center justify-center rounded-md bg-sky-700 px-3.5 py-2.5 mt-3 font-semibold leading-7 text-white "
          onClick={log}
     
        >Submit</button>





      </div>
    </>
  );


}
