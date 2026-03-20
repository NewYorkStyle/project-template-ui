import {Typography as AntdTypography} from 'antd';
import {type LinkProps} from 'antd/es/typography/Link';
import {type ParagraphProps} from 'antd/es/typography/Paragraph';
import {type TextProps} from 'antd/es/typography/Text';
import {type TitleProps} from 'antd/es/typography/Title';

const {
  Link: AntdLink,
  Paragraph: AntdParagraph,
  Text: AntdText,
  Title: AntdTitle,
} = AntdTypography;

export type TParagraphProps = ParagraphProps;
export type TTextProps = TextProps;
export type TTitleProps = TitleProps;
export type TLinkProps = LinkProps;

const Paragraph = (props: TParagraphProps) => {
  return <AntdParagraph {...props} />;
};

const Text = (props: TTextProps) => {
  return <AntdText {...props} />;
};

const Title = (props: TTitleProps) => {
  return <AntdTitle {...props} />;
};

const Link = (props: TLinkProps) => {
  return <AntdLink {...props} />;
};

export const Typography = {
  Link,
  Paragraph,
  Text,
  Title,
};
