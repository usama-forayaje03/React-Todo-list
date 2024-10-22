import { Button, Modal, Label, TextInput, Textarea, Select } from "flowbite-react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from "../formVeledete/formVelidetiom";


export function ModalPopup({ onOpen, onClose }) {
  

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);

  return (
    <>
      <Modal show={onOpen} onClose={() => onClose()}>
        <Modal.Header>Add New Task</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form className="flex-wrap flex" action="" onSubmit={handleSubmit(onSubmit)} >
              <div className="mb-2 w-full block">
                <Label htmlFor="small" value="Title" />
                <TextInput {...register("title")} id="small" type="text" sizing="sm" />
                {errors.title && <span className="text-rose-800">{errors?.title.message}</span>}
              </div>
              <div className="w-full mt-2">
                <div className="mb-2 block">
                  <Label htmlFor="description" value="Description" />
                </div>
                <Textarea {...register("description")} id="description" rows={4} />
                {errors.description && <span className="text-rose-800">{errors?.description.message}</span>}
              </div>

              <div className="w-2/3 mt-2">
                <div className="pr-2">
                  <div className="mb-2  block">
                    <Label htmlFor="Assigned To" value="Assigned To" />
                  </div>
                  <Select id="Assigned To" {...register("assignedTo")}>
                    <option value="Person one">Person one</option>
                    <option value="Person two">Person two</option>
                    <option value="Person three">Person three</option>
                    <option value="Person four">Person four</option>
                  </Select>
                  {errors.assignedTo && <span className="text-rose-800">{errors?.assignedTo.message}</span>}
                </div>
              </div>
              <div className="w-1/3 mt-2">
                <div className="mb-2 block">
                  <Label htmlFor="Priority " value="Priority " />
                </div>
                <Select id="Priority "   {...register("priority")} >
                  <option value="Height">Height</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </Select>
                {errors.priority && <span className="text-rose-800">{errors?.priority.message}</span>}
              </div>
              <Button className="mt-5" type="submit">Add Task</Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
