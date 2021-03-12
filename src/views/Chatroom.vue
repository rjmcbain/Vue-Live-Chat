<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import { watch } from "@vue/runtime-core";
import Navbar from "../components/Navbar";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
import NewChatForm from "../components/NewChatForm";
import ChatWindow from "../components/ChatWindow";
export default {
  components: { Navbar, NewChatForm, ChatWindow },

  setup() {
    const { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });

    return { user };
  },
};
</script>

<style></style>
