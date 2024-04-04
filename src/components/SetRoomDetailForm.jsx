import { useState } from 'react'
import roomService from '../service/room'
import { AlertMessageDanger, AlertMessageSuccess, Button, Input, Radio, Textarea } from './index'
import { useForm } from "react-hook-form"
function SetRoomDetailForm() {
    const [showAlertDanger, setShowAlertMessage] = useState({ isShow: false, message: "" })
    const [showAlertSuccess, setShowAlertSuccess] = useState({ isShow: false, message: "" })
    const {
        register,
        handleSubmit,
        watch,
        control,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        (async () => {
            try {
                const res = await roomService.save(data)
                if (res) {
                    console.log(res);
                    setShowAlertSuccess({ isShow: true, message: "Save sucessfull" })
                    reset()
                }
            } catch (error) {
                console.log(error);
                setShowAlertMessage({ isShow: true, message: error })
            } finally {
                setTimeout(() => {
                    setShowAlertMessage({ isShow: false })
                    setShowAlertSuccess({ isShow: false })
                }, 3000);
            }

        })();
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid w-full grid-cols-2 max-sm:!grid-cols-1 gap-x-5 max-w-screen-sm">
            <Input
                label="Hostel Name"
                className=""
                placeholder="BH C Bulding"
                {...register("hostel_name", {
                    required: "Hostel name is required",
                })}
                error={errors.hostel_name}
            />
            <Input
                label="Room No"
                className=""
                placeholder="520"
                {...register("room_number", {
                    required: "Hostel name is required",
                })}
                error={errors.room_number}
            />
            <Input
                label="Set Sering type"
                className=""
                placeholder="4"
                {...register("capacity", {
                    required: "Sering type is required",
                })}
                error={errors.capacity}
            />
            <Input
                label="Fees"
                className=""
                placeholder="68000"
                {...register("fees", {
                    required: "fees is required",
                })}
                error={errors.fees}
            />
            <div className=" col-span-2 max-sm:col-span-1">
                <Radio
                    label="Ac Room ? "
                    control={control}
                    name="ac_room"
                    containerClassName='sm:!flex-row sm:gap-5'
                    error={errors.ac_room}
                    options={[
                        { value: true, label: "Yes" },
                        { value: false, label: "No", default: true },
                    ]}
                />
            </div>
            <div className=" col-span-2 max-sm:col-span-1">
                <Textarea
                    label="Issue items"
                    placeholder="Bucket 2 , Fan Remot"
                    {...register("issue_items")}
                    error={errors.issue_items}
                />
            </div>
            <Button
                text="submit"
                type="submit"
                className="text-2xl"
            />
            <AlertMessageDanger
                showAlertDanger={showAlertDanger}
            />
            <AlertMessageSuccess
                showAlertSuccess={showAlertSuccess}
            />
        </form>
    )
}

export default SetRoomDetailForm