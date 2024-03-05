import { useRouter } from 'next/navigation';
import { validateForm } from '@/app/lib/validations';
import { useEffect, useState } from 'react';
import { data_INITIAL_STATE, warnings_INITIAL_STATE } from '../constants';
import { sendConfirmationMail, sendMessageToAdmin } from '../mailService';

export const useContact = () => {
  const [data, setData] = useState(data_INITIAL_STATE);
  const [showModal, setShowModal] = useState(false);
  const [warning, setWarning] = useState(warnings_INITIAL_STATE);
  const [isOnFocus, setIsOnFocus] = useState(warnings_INITIAL_STATE);
  const router = useRouter();

  useEffect(() => {
    setWarning(validateForm(data));
  }, [data]);

  const getData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const { name, value } = target;
    setData({ ...data, [name]: value });
    const currentField = {
      ...warnings_INITIAL_STATE,
      [name]: true,
    };
    setIsOnFocus(currentField);
  };
  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    const { name, email, phone, message } = data;
    e.preventDefault();
    sendConfirmationMail(email, name);
    sendMessageToAdmin(email, name, phone, message);
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
      router.push('/');
    }, 5000);
  };
  return { sendMessage, getData, warning, isOnFocus, showModal };
};
