class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :meme_id, :user_id, :timestamp, :email, :rating, :comment

  def email
    object.user.email
  end

  def timestamp
    object.created_at.strftime("%B %e, %Y")
  end

end
