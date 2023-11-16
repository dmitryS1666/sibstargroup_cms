class OrderMailer < ApplicationMailer
  def order_email(order)
    @order = order
    mail(to: 'inbox@sibstargroup.com', subject: 'New FeedBack')
  end
end
