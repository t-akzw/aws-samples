module Api
  module V1
    class SampleController < Api::V1::ApplicationBaseController
      skip_before_action :require_valid_token, :verify_authenticity_token, only: :public
  
      def public
        @message = 'public'
      end

      def restrict
        @message = 'authorized'
      end
    end
  end
end 