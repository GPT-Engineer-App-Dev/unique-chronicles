import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, Image, useToast } from "@chakra-ui/react";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const toast = useToast();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      toast({
        title: "Error",
        description: "Title and content are required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    // Here you would typically handle the form submission, e.g., sending the data to a server
    console.log("Title:", title);
    console.log("Content:", content);
    if (image) {
      console.log("Image:", image.name);
    }

    toast({
      title: "Post added",
      description: "Your blog post has been added successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Clear the form
    setTitle("");
    setContent("");
    setImage(null);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">Add New Post</Heading>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          isRequired
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          isRequired
        />
        <Input type="file" accept="image/*" onChange={handleImageChange} />
        {image && <Image src={URL.createObjectURL(image)} alt="Selected Image" boxSize="sm" />}
        <Button type="submit" colorScheme="teal" size="md">Add Post</Button>
      </VStack>
    </Container>
  );
};

export default AddPost;