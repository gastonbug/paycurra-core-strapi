import type { Schema, Struct } from '@strapi/strapi';

export interface FeaturedCategoriesFeaturedCategories
  extends Struct.ComponentSchema {
  collectionName: 'components_featured_categories_featured_categories';
  info: {
    displayName: 'FeaturedCategories';
  };
  attributes: {
    CategoryImageId: Schema.Attribute.String;
    CategoryImageUrl: Schema.Attribute.String;
    CategoryName: Schema.Attribute.String;
    CategoryUniqueReferenceNumber: Schema.Attribute.String;
  };
}

export interface OfferCategoryLoyaltyPromotion extends Struct.ComponentSchema {
  collectionName: 'components_offer_category_loyalty_promotions';
  info: {
    displayName: 'LoyaltyPromotion';
  };
  attributes: {
    LoyaltyProgrammeUniqueReferenceNumber: Schema.Attribute.String;
    LoyaltyTierName: Schema.Attribute.String;
    LoyaltyTierReferenceNumber: Schema.Attribute.String;
    MerchantUniqueReferenceNumber: Schema.Attribute.String;
    MinimumPayout: Schema.Attribute.Decimal;
    PointsToNextTier: Schema.Attribute.Decimal;
    PointsToValue: Schema.Attribute.Decimal;
    RewardEffect: Schema.Attribute.String;
    RewardEffectValue: Schema.Attribute.String;
    RewardEffectValueLimit: Schema.Attribute.String;
  };
}

export interface OfferCategoryOfferCategory extends Struct.ComponentSchema {
  collectionName: 'components_offer_category_offer_categories';
  info: {
    displayName: 'OfferCategory';
  };
  attributes: {
    CampaignName: Schema.Attribute.String;
    CampaignUniqueReferenceNumber: Schema.Attribute.String;
    CategoryName: Schema.Attribute.String;
    CategoryUniqueReferenceNumber: Schema.Attribute.String;
    OfferTitle: Schema.Attribute.String;
    PromotionName: Schema.Attribute.String;
    PromotionType: Schema.Attribute.String;
    PromotionUniqueReferenceNumber: Schema.Attribute.String;
  };
}

export interface OfferCategoryOfferProducts extends Struct.ComponentSchema {
  collectionName: 'components_offer_category_offer_products';
  info: {
    displayName: 'OfferProducts';
  };
  attributes: {
    Accessories: Schema.Attribute.String;
    CategoryName: Schema.Attribute.String;
    CategoryUniqueReferenceNumber: Schema.Attribute.String;
    Color: Schema.Attribute.String;
    CustomerUniqueReferenceNumber: Schema.Attribute.String;
    Description: Schema.Attribute.String;
    Fabric: Schema.Attribute.String;
    LoyaltyPromotion: Schema.Attribute.Component<
      'offer-category.loyalty-promotion',
      false
    >;
    Name: Schema.Attribute.String;
    OnlineConsultationRequired: Schema.Attribute.Boolean;
    OwnerUniqueReferenceNumber: Schema.Attribute.String;
    Price: Schema.Attribute.Decimal;
    ProductCatalogueUniquReferenceNumber: Schema.Attribute.String;
    ProductImages: Schema.Attribute.Component<
      'offer-category.product-images',
      true
    >;
    Promotion: Schema.Attribute.Component<'offer-category.promotion', false>;
    Returns: Schema.Attribute.Boolean;
    ShippingDetails: Schema.Attribute.String;
    Size: Schema.Attribute.String;
    Sku: Schema.Attribute.String;
    StockLevel: Schema.Attribute.String;
    StockQuantity: Schema.Attribute.Integer;
    UniqueReferenceNumber: Schema.Attribute.String;
    VariantPromotion: Schema.Attribute.Component<
      'offer-category.variant-promotion',
      false
    >;
    VariantUniqueReferenceNumber: Schema.Attribute.String;
  };
}

export interface OfferCategoryProductImages extends Struct.ComponentSchema {
  collectionName: 'components_offer_category_product_images';
  info: {
    displayName: 'ProductImages';
    icon: 'shield';
  };
  attributes: {
    DocumentAbsoluteUri: Schema.Attribute.String;
    DocumentVersion: Schema.Attribute.String;
    ImageType: Schema.Attribute.String;
    UniqueReferenceNumber: Schema.Attribute.String;
  };
}

export interface OfferCategoryPromotion extends Struct.ComponentSchema {
  collectionName: 'components_offer_category_promotions';
  info: {
    displayName: 'Promotion';
  };
  attributes: {
    MerchantUniqueReferenceNumber: Schema.Attribute.String;
    ProductCatalogueUniqueReferenceNumber: Schema.Attribute.String;
    PromotionEffect: Schema.Attribute.String;
    PromotionEffectValue: Schema.Attribute.String;
    PromotionEffectValueLimit: Schema.Attribute.String;
    PromotionUniqueReferenceNumber: Schema.Attribute.String;
  };
}

export interface OfferCategoryVariantPromotion extends Struct.ComponentSchema {
  collectionName: 'components_offer_category_variant_promotions';
  info: {
    displayName: 'VariantPromotion';
  };
  attributes: {
    MerchantUniqueReferenceNumber: Schema.Attribute.String;
    ProductCatalogueItemUniqueReferenceNumber: Schema.Attribute.String;
    PromotionEffect: Schema.Attribute.String;
    PromotionEffectValue: Schema.Attribute.String;
    PromotionEffectValueLimit: Schema.Attribute.String;
    PromotionUniqueReferenceNumber: Schema.Attribute.String;
  };
}

export interface SharedEventBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_event_banners';
  info: {
    displayName: 'eventBanner';
  };
  attributes: {
    BadgeColor: Schema.Attribute.String;
    CtaUrl: Schema.Attribute.String;
    EndDate: Schema.Attribute.DateTime;
    EventImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    EventName: Schema.Attribute.String;
    StartDate: Schema.Attribute.DateTime;
  };
}

export interface SharedHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_banners';
  info: {
    displayName: 'heroBanner';
  };
  attributes: {
    BackgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    CtaText: Schema.Attribute.String;
    CtaUrl: Schema.Attribute.String;
    OverlayColor: Schema.Attribute.String;
    SubTitle: Schema.Attribute.String;
    TextColor: Schema.Attribute.String;
    Title: Schema.Attribute.String;
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

export interface SharedMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_menu_items';
  info: {
    displayName: 'MenuItem';
  };
  attributes: {
    Label: Schema.Attribute.String;
    Order: Schema.Attribute.Integer;
    SubMenuItems: Schema.Attribute.Component<'shared.sub-menu-item', true>;
    URL: Schema.Attribute.Text;
  };
}

export interface SharedPromoBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_promo_banners';
  info: {
    displayName: 'promoBanner';
  };
  attributes: {
    BackgroundColor: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    DiscountLabel: Schema.Attribute.String;
    ProductImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    ProductLink: Schema.Attribute.String;
    Title: Schema.Attribute.String;
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

export interface SharedSubMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_sub_menu_items';
  info: {
    displayName: 'SubMenuItem';
  };
  attributes: {
    Label: Schema.Attribute.String;
    URL: Schema.Attribute.Text;
  };
}

export interface SharedVideoModule extends Struct.ComponentSchema {
  collectionName: 'components_shared_video_modules';
  info: {
    displayName: 'videoModule';
  };
  attributes: {
    Caption: Schema.Attribute.String;
    CtaUrl: Schema.Attribute.String;
    OverlayText: Schema.Attribute.String;
    Video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'featured-categories.featured-categories': FeaturedCategoriesFeaturedCategories;
      'offer-category.loyalty-promotion': OfferCategoryLoyaltyPromotion;
      'offer-category.offer-category': OfferCategoryOfferCategory;
      'offer-category.offer-products': OfferCategoryOfferProducts;
      'offer-category.product-images': OfferCategoryProductImages;
      'offer-category.promotion': OfferCategoryPromotion;
      'offer-category.variant-promotion': OfferCategoryVariantPromotion;
      'shared.event-banner': SharedEventBanner;
      'shared.hero-banner': SharedHeroBanner;
      'shared.media': SharedMedia;
      'shared.menu-item': SharedMenuItem;
      'shared.promo-banner': SharedPromoBanner;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.sub-menu-item': SharedSubMenuItem;
      'shared.video-module': SharedVideoModule;
    }
  }
}
