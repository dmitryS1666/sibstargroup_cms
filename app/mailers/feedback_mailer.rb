class FeedbackMailer < ApplicationMailer
  def feedback_email(feedback)
    @feedback = feedback
    mail(to: 'inbox@sibstargroup.com', subject: 'Новый вопрос')
  end
end
