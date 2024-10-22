import { Button, Modal, Label, TextInput, Textarea, Select } from "flowbite-react";
import { useState } from "react";

export function ModalPopup({ onOpen, onClose }) {

  let [data, setData] = useState({
    title: '',
    description: '',
    assignedTo: '',
    priority: ''
  })

  let [erors, setErors] = useState({
    title: null,
    description: null,
    assignedTo: null,
    priority: null
  })

  let changHandler = (e) => {
    let newObg = {
      ...data,
      [e.target.name]: e.target.value,
    }
    setData(newObg);
    setErors({
      title: null,
      description: null,
      assignedTo: null,
      priority: null
    })
  }
console.log(data);



  let submitHandler = (e) => {
    e.preventDefault();

    if(data.title == '') {
      setErors({
        ...erors,
        title: 'Title fill korun'
      });
    }
    else if (data.title.length < 10 ){
      setErors({
        ...erors,
        title: 'min 10 word'
      });
    }
    else if (data.title.length > 20 ){
      setErors({
        ...erors,
        title: 'max 20 word'
      });
    }
    else if (data.description === ''){
      setErors({
        ...erors,
        description: 'description fill korun'
      });
    }
    else if (data.assignedTo === ''){
      setErors({
        ...erors,
        assignedTo: 'assignedTo fill korun'
      });
    }
    else if (data.priority === ''){
      setErors({
        ...erors,
        priority: 'priority fill korun'
      });
    }
  }

  return (
    <>
      <Modal show={onOpen} onClose={() => onClose()}>
        <Modal.Header>Add New Task</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form className="flex-wrap flex" action="" onSubmit={submitHandler}>
              <div className="mb-2 w-full block">
                <Label htmlFor="small" value="Title" />
                <TextInput name="title" onChange={changHandler} id="small" type="text" sizing="sm" />
                {erors.title && <span className="text-rose-800">{erors.title}</span>}
              </div>
              <div className="w-full mt-2">
                <div className="mb-2 block">
                  <Label htmlFor="description" value="Description" />
                </div>
                <Textarea name="description" onChange={changHandler} id="description" rows={4} />
                {erors.description && <span className="text-rose-800">{erors.description}</span>}
              </div>

              <div className="w-2/3 mt-2">
                <div className="pr-2">
                  <div className="mb-2  block">
                    <Label htmlFor="Assigned To" value="Assigned To" />
                  </div>
                  <Select name="assignedTo" onChange={changHandler} id="Assigned To">
                    <option value="Person one">Person one</option>
                    <option value="Person two">Person two</option>
                    <option value="Person three">Person three</option>
                    <option value="Person four">Person four</option>
                  </Select>
                  {erors.assignedTo && <span className="text-rose-800">{erors.assignedTo}</span>}
                </div>
              </div>
              <div className="w-1/3 mt-2">
                <div className="mb-2 block">
                  <Label htmlFor="Priority " value="Priority " />
                </div>
                <Select id="Priority " name="priority" onChange={changHandler}>
                  <option value="Height">Height</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </Select>
                {erors.priority && <span className="text-rose-800">{erors.priority}</span>}
              </div>
              <Button className="mt-5" type="submit">Add Task</Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
