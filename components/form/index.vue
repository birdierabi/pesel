<template lang="pug">
  transition(name="fade")
    .form-component(v-show="type")
      transition(name="fade" mode="in-out")
        .message.flex.column.center(v-if="!isLoading && status")
          div
            .title(v-if="status === 200") Ваше сообщение отправлено!
              br
              | Мы свяжемся с вами в ближайшее время.
            .title(v-else) Не удалось отправить сообщение.
            commonButton(v-if="status !== 200" @click.prevent="retry") Попробовать снова
            commonButton(v-else @click.prevent="closeMsg") Отлично
        .loader.flex.j-center.a-center(v-if="isLoading")
          vLoader
      form(@submit.prevent="send")
        .h1 Напишите нам
        .fields
          commonInput.item(
            v-model="form.caller"
            :error="invalidCallerMessage"
            required) Имя
          commonInput.item(
            v-model="form.phone"
            type="phone"
            :error="invalidPhoneMessage"
            required) Телефон
          commonInput.item(
            v-model="form.email"
            type="email"
            :error="invalidEmailMessage"
            required) Email
          commonTextarea.item(
            v-model="form.content"
            :error="invalidCommentMessage"
            required) Сообщение
          .bottom.flex.j-between
            commonFile(v-model="file" multiple)
            div
              commonButton(@click="send" :disabled="!!status") отправить
              .policy Нажимая на кнопку, вы принимаете условия&nbsp;
                a(href="/policy" target="_blank") пользовательского соглашения.
</template>

<script>
import mixinForm from './form'

export default {
  name: 'form-component',
  mixins: [mixinForm]
}
</script>

<style lang="scss" scoped>
@import "./_index.scss";
.form-component {
  // Your custom styles here
}
</style>
