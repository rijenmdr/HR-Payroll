import { Html, Heading, Text } from '@react-email/components';

const ForgotPasswordTemplate = () => {
  return (
    <Html lang="en">
      <Heading as="h1">New Form Submission</Heading>
      <Text>You just submitted a form. Here are the details:</Text>
    </Html>
  );
};

export default ForgotPasswordTemplate;
