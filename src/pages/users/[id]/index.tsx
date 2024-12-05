import React, { useEffect, useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import { GET_USER } from '@/src/utils/gql/queries/users';
import { UPDATE_USER } from '@/src/utils/gql/mutations/users';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import Dropdown from '@/src/components/organism/DropDown/index';
import Switch from '@/src/components/molecules/Switch/Index';
import UploadImage from '@/src/components/molecules/UploadImage/Index';
import useFormData from '@/src/hooks/useFromData';
import { Button } from '@/src/components/ui/button';

const Role = [
  { id: '1', value: 'admin', label: 'Admin' },
  { id: '2', value: 'user', label: 'User' },
];

export async function getServerSideProps(context: { params: { id: string } }) {
  const id = context.params.id;
  return {
    props: {
      id,
    },
  };
}

const Index = ({ id }: { id: string }) => {
  const [enabled, setEnabled] = useState<boolean>(true);
  interface User {
    id: string;
    name: string;
    email: string;
    image: string;
  }

  const [user, setUser] = useState<User | null>(null);
  const { form, formData, updateFormData } = useFormData({});
  const [updateUser] = useMutation(UPDATE_USER);
  const [getUser] = useLazyQuery(GET_USER, {
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      console.log(data);
      setUser(data.user);
    },
  });

  useEffect(() => {
    getUser({ variables: { userId: id } });
  }, [id]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);
    await updateUser({
      variables: {
        where: {
          id: id,
        },
        data: {
          name: {
            set: formData.name,
          },
          email: {
            set: formData.email,
          },
        },
      },
    })
      .then(() => {
        console.log('Actualizado correctamente');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>User</h1>
      <form ref={form} onChange={updateFormData} onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 gap-10 mx-auto max-w-xl'>
          <div className='col-span-2 flex flex-col justify-center items-center'>
           
            <Label htmlFor='picture'>Image</Label>
            <Input id='picture' type='file' />
          </div>
          <div>
            <Label htmlFor='email'>Email</Label>
            <input type='email' id='email' name='email' />
            {/* <Input id='email' type='email' name='email' /> */}
          </div>
          <div>
            <Label htmlFor='name'>Name</Label>
            <input type='name' id='name' name='name' />
            {/* <Input id='name' name='name' type='text' /> */}
          </div>
          <div className='flex flex-col justify-center items-start gap-1'>
            <Label htmlFor='name'>Role</Label>
            <Dropdown data={Role} />
          </div>
          <div className='flex flex-col justify-center items-start gap-1'>
            <Switch id='enabled' title='Enabled' data={enabled} setData={setEnabled} />
          </div>
        </div>
        <Button type='submit'>Edit</Button>
      </form>
    </div>
  );
};

export default Index;