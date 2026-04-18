<template>
  <Loader v-if="isLoading" button-loader />
  <button
    v-else
    :id="buttonId"
    :class="[shakeButton ? 'shake' : '', `bg-${color || 'blue'}`, !fullWidth ? 'max-content' : '']"
    type="submit"
    :disabled="invalid"
    @submit.prevent
    @click="submitButton($event)"
  >
    {{ buttonText }}
    <LaunchIcon v-if="iconType && iconType === 'open-new-tab'" />
    <ArrowRightIcon v-else-if="iconType && iconType === 'arrow-right'" />
  </button>
</template>

<script setup>
import ArrowRightIcon from '~/assets/icons/arrow-right.svg';
import LaunchIcon from '~/assets/icons/launch.svg';

const props = defineProps({
  buttonId: { type: String, default: '', required: true },
  buttonText: { type: String, default: 'Continue' },
  invalid: { type: Boolean, default: false },
  isLoading: { type: Boolean, default: false },
  iconType: { type: String, default: '', required: false },
  color: { type: String, default: 'blue' },
  fullWidth: { type: Boolean, default: true },
});

const emit = defineEmits(['click']);

const shakeButton = ref(false);

const shakeElement = () => {
  shakeButton.value = true;
  setTimeout(() => {
    shakeButton.value = false;
  }, 1000);
};

const submitButton = (e) => {
  if (e.key === 'Enter') shakeElement();
  else if (e.key === undefined && (!props.invalid ? emit('click', e) : shakeElement()));
};

onMounted(() => {
  document.addEventListener('keydown', submitButton);
});

onUnmounted(() => {
  document.removeEventListener('keydown', submitButton);
});
</script>

<style lang="scss" scoped>
button {
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-family: 'Gordita';
  font-weight: 600;
  color: var(--white);
  font-size: 16px;
  line-height: 26px;
  padding: 15px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0px;
  transition: all 0.5s ease-in-out;
  width: 100%;

  &.max-content {
    width: max-content;
  }

  svg {
    color: var(--white);
    height: 16px;
    width: 16px;
    padding-left: 0.5rem;
    transition: all 0.25s ease-in-out;
  }

  &.bg-green {
    background-color: var(--egg-green-tint-700);

    &:hover {
      background-color: var(--egg-green-tint-800);
    }
    &:active {
      background-color: var(--egg-green-tint-900);
    }
  }
  &.bg-blue {
    background-color: var(--egg-navy-tint-700);

    &:hover {
      background-color: var(--egg-navy-tint-800);
    }
    &:active {
      background-color: var(--egg-navy-tint-900);
    }
  }
  &.bg-navy {
    background-color: var(--egg-navy-tint-900);
  }
  &.bg-red {
    background-color: var(--egg-red-tint-700);

    &:hover {
      background-color: var(--egg-red-tint-800);
    }
    &:active {
      background-color: var(--egg-red-tint-900);
    }
  }

  &:disabled {
    cursor: not-allowed;
    color: var(--white);
    background: var(--egg-greyscale-navy-300);
    &:hover {
      background-color: var(--egg-greyscale-navy-300);
    }

    svg {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    height: 60px;
    font-size: 16px;
  }
}
</style>
