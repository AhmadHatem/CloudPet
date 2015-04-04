class Buddy < ActiveRecord::Base
  belongs_to :user
  belongs_to :register
  #alidates :user, :register, presence: true
  def self.search(search)
  search_condition = "%" + search + "%"
  find(:all, :conditions => ['title LIKE ? OR description LIKE ?', search_condition, search_condition])
end

end
