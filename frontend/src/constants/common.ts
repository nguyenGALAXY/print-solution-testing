import { SelectOption } from '@cads-ui/core/components/select/SelectProps';

export const COMMONS = {
  APP_NAME: 'Print Solution',
  SLOGAN: 'Giải pháp quản lý đặt in ấn hiệu quả, tiết kiệm'
};

export const USER_ROLES = { ADMIN: 'admin', CUSTOMER: 'customer', GUEST: 'guest' };

export const CONTACT_PRICE = 0;

export const PRODUCT_OPTION_TYPES = {
  SINGLE_SELECT: 'select',
  MULTIPLE_SELECT: 'mul_select',
  INPUT: 'input'
};

export const PRODUCT_OPTION_TYPES_OPTIONS: SelectOption[] = [
  { label: 'Khách hàng có thể chọn 1 tùy chọn', value: PRODUCT_OPTION_TYPES.SINGLE_SELECT },
  { label: 'Khách hàng có thể chọn nhiều tùy chọn', value: PRODUCT_OPTION_TYPES.MULTIPLE_SELECT },
  { label: 'Khách hàng nhập yêu cầu', value: PRODUCT_OPTION_TYPES.INPUT }
];
