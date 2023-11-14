class PagesController < ApplicationController
  include ApplicationHelper

  def home
    @navigation = Navigation.items
    @navigation_page = NavigationPage.items
    @titles = Title.items
    @general = General.items
    @buttons = Button.items
    @contacts = Contact.items
    @footer = Footer.items
    @cookies = CookieElement.find_by(language: I18n.locale)

    @news = News.items

    @slides = Slider.items
    @timer = SliderConfig.find_by(name: 'slider_timer')['value']
  end
end
