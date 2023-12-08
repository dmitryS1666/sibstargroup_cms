class OrderMailer < ApplicationMailer
  def order_email(order)
    @order = order
    mail(to: 'inbox@sibstargroup.com', subject: 'Новый заказ')
  end
end
