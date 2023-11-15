module ApplicationHelper
  def load_data
    @navigation = Navigation.items
    @navigation_page = NavigationPage.items
    @titles = Title.items
    @general = General.items
    @buttons = Button.items
    @contacts = Contact.items
    @footer = Footer.items
    @cookies = CookieElement.find_by(language: I18n.locale)
    @supply_basis = SupplyBasis.items

    @coal_grades = CoalGrade.all
    @coal_grade_items = CoalGradeItem.all
    @command = Command.items
  end
end
