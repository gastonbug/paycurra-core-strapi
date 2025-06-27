import type { Schema, Struct } from '@strapi/strapi';

export interface SharedEventBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_event_banners';
  info: {
    displayName: 'eventBanner';
  };
  attributes: {
    badgeColor: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    endDate: Schema.Attribute.DateTime;
    eventImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    eventName: Schema.Attribute.String;
    startDate: Schema.Attribute.DateTime;
  };
}

export interface SharedHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_banners';
  info: {
    displayName: 'heroBanner';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    ctaText: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    overlayColor: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    textColor: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedPromoBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_promo_banners';
  info: {
    displayName: 'promoBanner';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    discountLabel: Schema.Attribute.String;
    productImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    productLink: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedVideoModule extends Struct.ComponentSchema {
  collectionName: 'components_shared_video_modules';
  info: {
    displayName: 'videoModule';
  };
  attributes: {
    caption: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    overlayText: Schema.Attribute.String;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.event-banner': SharedEventBanner;
      'shared.hero-banner': SharedHeroBanner;
      'shared.media': SharedMedia;
      'shared.promo-banner': SharedPromoBanner;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.video-module': SharedVideoModule;
    }
  }
}
